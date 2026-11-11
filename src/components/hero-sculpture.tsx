import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/** A procedural silk torus. No video, textures or animation dependencies. */
export function HeroSculpture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const phase = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.closest("section");
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx || !host) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    let width = 0,
      height = 0,
      visible = true,
      raf = 0,
      last = 0;
    let px = 0,
      py = 0,
      tx = 0,
      ty = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const compact = width < 768;
      const t = phase.current;
      const tilt = 0.85 + Math.sin(t * 0.18) * 0.18 + py * 0.12;
      const turn = -0.38 + Math.sin(t * 0.13) * 0.25 + px * 0.14;
      const scale = Math.min(width * (compact ? 0.65 : 0.43), height * 0.56);
      const cx = width * (compact ? 0.65 : 0.75),
        cy = height * (compact ? 0.35 : 0.43);
      const strands = compact ? 64 : 100;
      const rings: { points: [number, number][]; depth: number; v: number }[] = [];
      for (let j = 0; j < strands; j++) {
        const v = (j / strands) * Math.PI * 2;
        const points: [number, number][] = [];
        let depth = 0;
        for (let i = 0; i <= 128; i++) {
          const u = (i / 128) * Math.PI * 2;
          const twist = v + 0.65 * Math.sin(u * 2 + t * 0.22);
          const tube = 0.31 + 0.055 * Math.sin(u * 3 - t * 0.3 + v);
          const radius = 0.82 + tube * Math.cos(twist);
          const x = radius * Math.cos(u),
            y = radius * Math.sin(u),
            z = tube * Math.sin(twist);
          const y1 = y * Math.cos(tilt) - z * Math.sin(tilt);
          const z1 = y * Math.sin(tilt) + z * Math.cos(tilt);
          const x2 = x * Math.cos(turn) + z1 * Math.sin(turn);
          const z2 = -x * Math.sin(turn) + z1 * Math.cos(turn);
          const angle = -0.52 + Math.sin(t * 0.1) * 0.1;
          const perspective = 2.8 / (2.8 - z2);
          points.push([
            cx + (x2 * Math.cos(angle) - y1 * Math.sin(angle)) * scale * perspective,
            cy + (x2 * Math.sin(angle) + y1 * Math.cos(angle)) * scale * perspective,
          ]);
          depth += z2;
        }
        rings.push({ points, depth: depth / 129, v });
      }
      rings.sort((a, b) => a.depth - b.depth);
      for (const ring of rings) {
        const highlight = (Math.sin(ring.v + 0.8) + 1) / 2;
        const light = 38 + highlight * 45;
        ctx.strokeStyle = `hsla(${325 + highlight * 15},${82 - highlight * 51}%,${light}%,${0.25 + highlight * 0.48})`;
        ctx.lineWidth = compact ? 0.7 : 0.85;
        ctx.beginPath();
        ring.points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
        ctx.stroke();
      }
    };
    const running = () => !paused && !motion.matches && visible && !document.hidden;
    const tick = (now: number) => {
      if (!running()) {
        raf = 0;
        return;
      }
      if (now - last >= 32) {
        const delta = last ? Math.min((now - last) / 1000, 0.05) : 0;
        phase.current += delta;
        px += (tx - px) * 0.04;
        py += (ty - py) * 0.04;
        render();
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    const sync = () => {
      setReduced(motion.matches);
      if (!running()) {
        cancelAnimationFrame(raf);
        raf = 0;
        last = 0;
        render();
      } else if (!raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
      sync();
    };
    const pointer = (event: PointerEvent) => {
      if (!fine.matches || motion.matches || paused) return;
      const rect = host.getBoundingClientRect();
      tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      ty = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    const leave = () => {
      tx = 0;
      ty = 0;
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(host);
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    host.addEventListener("pointermove", pointer, { passive: true });
    host.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    resize();
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      ro.disconnect();
      host.removeEventListener("pointermove", pointer);
      host.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, [paused]);

  return (
    <>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-art-halo" />
        <canvas ref={canvasRef} />
        <div className="hero-art-shade" />
      </div>
      {!reduced && (
        <button
          type="button"
          className="hero-motion-control"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Spustit animaci pozadí" : "Pozastavit animaci pozadí"}
          aria-pressed={paused}
        >
          {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
          <span>{paused ? "Spustit pohyb" : "Zastavit pohyb"}</span>
        </button>
      )}
    </>
  );
}
