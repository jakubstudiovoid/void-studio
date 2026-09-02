import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const kind = String(data.get("kind") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Jméno: ${name}`,
      `E-mail: ${email}`,
      `Zadání: ${kind}`,
      "",
      message,
    ].join("\n");

    const href = `${site.emailHref}?subject=${encodeURIComponent(
      `Poptávka VOID — ${kind || "zakázka"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col gap-4 border border-border p-8">
        <Check className="size-5" strokeWidth={1.5} />
        <p className="text-lg tracking-tight">E-mailový klient je otevřen.</p>
        <p className="text-sm leading-relaxed text-muted">
          Pokud se poštovní klient nespustil, napište přímo na{" "}
          <a href={site.emailHref} className="underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const label = "mb-1 block text-xs tracking-[0.16em] text-subtle uppercase";

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Jméno</span>
          <input
            className="field"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jan Novák"
          />
        </label>
        <label className="block">
          <span className={label}>E-mail</span>
          <input
            className="field"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jan@email.cz"
          />
        </label>
      </div>
      <label className="block">
        <span className={label}>Typ zadání</span>
        <select className="field" name="kind" required defaultValue="">
          <option value="" disabled>
            Vyberte
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Identita a web">Identita a web</option>
          <option value="Jiné">Jiné</option>
        </select>
      </label>
      <label className="block">
        <span className={label}>Zpráva</span>
        <textarea
          className="field min-h-32 resize-y"
          name="message"
          required
          placeholder="Rozsah, termín, odkaz na stávající značku nebo web."
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Odeslat poptávku
          <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
        </Button>
        <p className="max-w-xs text-xs leading-relaxed text-subtle">
          Odesláním se otevře e-mailový program. Údaje se na server neukládají.
        </p>
      </div>
    </form>
  );
}
