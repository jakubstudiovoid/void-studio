import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="text-xs tracking-[0.22em] text-muted uppercase">Chyba</p>
      <h1 className="font-medium text-2xl tracking-tight">Něco se pokazilo</h1>
      <p className="max-w-md text-sm break-words leading-relaxed text-muted">
        {error.message || "Neočekávaná chyba. Obnovte stránku."}
      </p>
    </main>
  );
}
