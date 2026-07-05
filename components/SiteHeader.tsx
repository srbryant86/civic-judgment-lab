"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, SITE } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="wrap wrap--wide site-header__bar">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">
            History <b>Judgment</b> Lab
          </span>
          <span className="brand__sub">Civic Judgment Lab</span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-nav"
          className={`nav${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav__link${isActive(item.href) ? " nav__link--active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.short ?? item.label}
            </Link>
          ))}
        </nav>
      </div>
      <span className="print-only" aria-hidden>
        {SITE.name} — {SITE.tagline}
      </span>
    </header>
  );
}
