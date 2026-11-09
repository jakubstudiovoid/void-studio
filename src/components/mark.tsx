export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.85 0h2.3v8.55L20.7 1.05l1.63 1.62-7.55 7.5H24v2.3h-9.22l7.55 7.55-1.63 1.63-7.5-7.55V24h-2.3v-8.9l-7.5 7.55-1.63-1.63 7.55-7.55H0v-2.3h9.22L1.72 2.67 3.35 1.05l7.5 7.5V0Z"
      />
    </svg>
  );
}
