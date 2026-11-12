import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricePackages } from "@/data/pricing";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { site } from "@/data/site";

const kindOptions = [
  ...pricePackages.map((p) => p.title),
  ...services.map((s) => s.title),
  "Identita a web",
  "Jiné",
];

const budgetOptions = [
  "Rád/a si nechám poradit",
  "Do 25 000 Kč",
  "25 000–45 000 Kč",
  "45 000–70 000 Kč",
  "Nad 70 000 Kč",
];

export function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [sent, setSent] = useState(false);
  const [kind, setKind] = useState(initialService);
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: FieldErrors = {};
    if (!name) next.name = "Doplňte jméno.";
    if (!email) next.email = "Doplňte e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "E-mail nemá správný tvar.";
    if (!kind) next.kind = "Vyberte typ zadání.";
    if (!message) next.message = "Napište zprávu.";
    setErrors(next);
    const first = (["name", "email", "kind", "message"] as const).find((key) => next[key]);
    if (first) {
      form.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }

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
    <form onSubmit={onSubmit} noValidate className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Jméno</span>
          <input
            className={`field${errors.name ? " is-invalid" : ""}`}
            name="name"
            data-field="name"
            type="text"
            autoComplete="name"
            placeholder="Jan Novák"
            aria-invalid={Boolean(errors.name)}
            onChange={() => setErrors((curr) => ({ ...curr, name: undefined }))}
          />
          <FieldNote message={errors.name} />
        </label>
        <label className="block">
          <span className={label}>E-mail</span>
          <input
            className={`field${errors.email ? " is-invalid" : ""}`}
            name="email"
            data-field="email"
            type="email"
            autoComplete="email"
            placeholder="jan@email.cz"
            aria-invalid={Boolean(errors.email)}
            onChange={() => setErrors((curr) => ({ ...curr, email: undefined }))}
          />
          <FieldNote message={errors.email} />
        </label>
      </div>
      <div className="block">
        <span className={label}>Typ zadání</span>
        <FieldSelect
          name="kind"
          value={kind}
          placeholder="Vyberte"
          options={kindOptions}
          invalid={Boolean(errors.kind)}
          onChange={(next) => {
            setKind(next);
            setErrors((curr) => ({ ...curr, kind: undefined }));
          }}
        />
        <FieldNote message={errors.kind} />
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="block">
          <span className={label}>Orientační rozpočet · nepovinné</span>
          <FieldSelect name="budget" placeholder="Rád/a si nechám poradit" options={budgetOptions} />
        </div>
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
          className={`field min-h-32 resize-y${errors.message ? " is-invalid" : ""}`}
          name="message"
          data-field="message"
          placeholder="Rozsah, termín, odkaz na stávající značku nebo web."
          aria-invalid={Boolean(errors.message)}
          onChange={() => setErrors((curr) => ({ ...curr, message: undefined }))}
        />
        <FieldNote message={errors.message} />
      </label>
      <div className="text-sm text-muted">
        <p>Poptávka je nezávazná.</p>
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/spoluprace" className="underline">
            Jak spolupráce probíhá
          </Link>
          <Link to="/cenik" className="underline">
            Orientační ceny
          </Link>
        </p>
      </div>
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

function FieldNote({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="field-note">{message}</p>;
}

type FieldErrors = Partial<Record<"name" | "email" | "kind" | "message", string>>;

function FieldSelect({
  name,
  value,
  placeholder,
  options,
  invalid,
  onChange,
}: {
  name: string;
  value?: string;
  placeholder: string;
  options: string[];
  invalid?: boolean;
  onChange?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(value ?? "");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = value ?? internal;

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: string) {
    setInternal(next);
    onChange?.(next);
    setOpen(false);
  }

  return (
    <div className={`field-select ${invalid ? "is-invalid" : ""}`} ref={rootRef}>
      <input type="hidden" name={name} value={current} />
      <button
        type="button"
        className={`field field-select-trigger ${current ? "" : "is-empty"}`}
        data-field={name === "kind" ? "kind" : undefined}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{current || placeholder}</span>
        <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" />
      </button>
      {open ? (
        <ul className="field-select-menu" id={listId} role="listbox">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={option === current}
                className={option === current ? "is-selected" : ""}
                onClick={() => choose(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
