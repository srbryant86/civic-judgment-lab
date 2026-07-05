import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap wrap--wide">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">{SITE.name}</div>
            <p style={{ maxWidth: "34ch", marginTop: "0.6rem", fontSize: "0.92rem" }}>
              {SITE.tagline}
            </p>
          </div>
          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link className="site-footer__link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="site-footer__fine">
          <p style={{ marginBottom: "0.4rem" }}>
            Portfolio &amp; product demonstration. Static sample data — no login, no database,
            no student data collected, and no live AI service.
          </p>
          <p className="mb-0">
            Built to demonstrate modern instructional design for secondary social studies.
            Review all generated materials for accuracy before classroom use.
          </p>
        </div>
      </div>
    </footer>
  );
}
