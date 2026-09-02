export const site = {
  name: "VOID",
  brand: "studio VOID",
  legalName: "studio VOID",
  tagline: "Grafika, identita a web",
  description:
    "studio VOID — grafické a marketingové studio v Jablonci nad Nisou. Identita, tisk, web a kampaně.",
  email: "hello@studiovoid.cz",
  emailHref: "mailto:hello@studiovoid.cz",
  url: "https://studiovoid.cz",
  address: {
    city: "Jablonec nad Nisou",
    region: "Liberecký kraj",
    country: "Česko",
  },
} as const;

export const nav = [
  { to: "/prace" as const, label: "Portfolio" },
  { to: "/studio" as const, label: "Studio" },
  { to: "/cenik" as const, label: "Ceník" },
  { to: "/kontakt" as const, label: "Kontakt" },
];

export function pageTitle(title?: string) {
  return title ? `${title} — ${site.brand}` : `${site.brand} — ${site.tagline}`;
}
