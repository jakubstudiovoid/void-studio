import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricePackages } from "@/data/pricing";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function ContactForm({ initialService = "" }: { initialService?: string }) {
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
      `Rozpočet: ${String(data.get("budget") || "Neuveden")}`,
      `Termín: ${String(data.get("deadline") || "Neuveden")}`,
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
        <p className="text-lg tracking-tight">Poptávka je připravena k odeslání.</p>
        <p className="text-sm leading-relaxed text-muted">
          Zprávu odešlete ve svém e-mailovém programu. Pokud se nespustil, napište přímo na{" "}
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
        <select className="field" name="kind" required defaultValue={initialService}>
          <option value="" disabled>
            Vyberte
          </option>
          {pricePackages.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Identita a web">Identita a web</option>
          <option value="Jiné">Jiné</option>
        </select>
      </label>
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Orientační rozpočet · nepovinné</span>
          <select name="budget" className="field" defaultValue="">
            <option value="">Rád/a si nechám poradit</option>
            <option>Do 25 000 Kč</option>
            <option>25 000–45 000 Kč</option>
            <option>45 000–70 000 Kč</option>
            <option>Nad 70 000 Kč</option>
          </select>
        </label>
        <label className="block">
          <span className={label}>Požadovaný termín · nepovinné</span>
          <input
            name="deadline"
            type="text"
            className="field"
            placeholder="Například březen 2027 / nespěchá"
          />
        </label>
      </div>
      <label className="block">
        <span className={label}>Zpráva</span>
        <textarea
          className="field min-h-32 resize-y"
          name="message"
          required
          placeholder="Rozsah, termín, odkaz na stávající značku nebo web."
        />
      </label>
      <p className="text-sm text-muted">
        Poptávka je nezávazná.{" "}
        <Link to="/spoluprace" className="underline">
          Jak spolupráce probíhá
        </Link>{" "}
        ·{" "}
        <Link to="/cenik" className="underline">
          Orientační ceny
        </Link>
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Připravit e-mail
          <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
        </Button>
        <p className="max-w-xs text-xs leading-relaxed text-subtle">
          Odesláním se otevře e-mailový program. Údaje se na server neukládají.
        </p>
      </div>
    </form>
  );
}
