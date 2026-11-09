import { useEffect } from "react";

function coversImage(x: number, y: number) {
  return [...document.images].some((img) => {
    const box = img.getBoundingClientRect();
    return box.width > 0 && x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;
  });
}

export function ImageLock() {
  useEffect(() => {
    const lock = (img: HTMLImageElement) => {
      img.draggable = false;
      img.setAttribute("draggable", "false");
    };
    const lockAll = () => {
      for (const img of document.images) lock(img);
    };
    lockAll();
    const observer = new MutationObserver(lockAll);
    observer.observe(document.body, { childList: true, subtree: true });

    const block = (event: Event) => {
      if (!(event instanceof MouseEvent) && !(event instanceof DragEvent)) return;
      const target = event.target;
      const onImage =
        target instanceof Element &&
        (target instanceof HTMLImageElement || Boolean(target.closest("img, picture")));
      if (onImage || coversImage(event.clientX, event.clientY)) event.preventDefault();
    };

    document.addEventListener("contextmenu", block, true);
    document.addEventListener("dragstart", block, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("contextmenu", block, true);
      document.removeEventListener("dragstart", block, true);
    };
  }, []);

  return null;
}
