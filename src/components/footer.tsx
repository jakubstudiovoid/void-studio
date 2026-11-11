import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
export function Footer() {
  return (
    <footer className="premium-footer">
      <div className="page-grid">
        <div className="footer-top">
          <span className="micro">DALŠÍ PROJEKT MŮŽE BÝT VÁŠ.</span>
          <span className="micro">POJĎME MU DÁT TVAR.</span>
        </div>
        <Link to="/kontakt" className="footer-cta">
          Máte vizi?
          <br />
          Začněme.
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <div className="footer-contact">
          <a href={site.emailHref}>{site.email} ↗</a>
          <span>
            Nezávislé studio.
            <br />
            Jablonec nad Nisou / Celé Česko.
          </span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} studio VOID</span>
          <div>
            <Link to="/prace">Portfolio</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/spoluprace">Spolupráce</Link>
            <Link to="/soukromi">Soukromí</Link>
            <a href="#obsah">Nahoru ↑</a>
          </div>
        </div>
        <div className="footer-wordmark">
          <img src="/images/studio-void-wordmark.png" alt="STUDIO VOID" width={1472} height={775} />
        </div>
      </div>
    </footer>
  );
}
