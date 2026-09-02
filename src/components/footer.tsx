import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="page-grid py-14 md:py-16">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <Logo className="mb-7" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Grafické a marketingové studio. Identita, tisk, web a kampaně.{" "}
              {site.address.city}.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="kicker mb-5">Navigace</p>
              <ul className="flex flex-col gap-2.5 text-sm text-muted">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="transition-colors duration-200 hover:text-fg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker mb-5">Kontakt</p>
              <ul className="flex flex-col gap-2.5 text-sm text-muted">
                <li>
                  <a
                    href={site.emailHref}
                    className="text-fg transition-colors duration-200 hover:text-steel"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  {site.address.city}
                  <br />
                  {site.address.region}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand}
          </p>
          <p>
            <Link to="/soukromi" className="hover:text-muted">
              Ochrana soukromí
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
