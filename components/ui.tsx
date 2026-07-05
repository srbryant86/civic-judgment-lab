import { ReactNode } from "react";
import { STANDARDS_NOTE } from "@/content/site";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="page-hero__title">{title}</h1>
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function Section({
  variant,
  eyebrow,
  title,
  intro,
  id,
  wide,
  children,
}: {
  variant?: "tint" | "ink";
  eyebrow?: string;
  title?: string;
  intro?: string;
  id?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const cls = `section${variant === "tint" ? " section--tint" : ""}${
    variant === "ink" ? " section--ink" : ""
  }`;
  return (
    <section className={cls} id={id}>
      <div className={`wrap${wide ? " wrap--wide" : ""}`}>
        {(eyebrow || title || intro) && (
          <div className="section__head">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            {title ? <h2 className="section__title">{title}</h2> : null}
            {intro ? <p className="section__intro">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: "info" | "note" | "caution";
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={`callout callout--${variant}`}>
      {title ? <div className="callout__title">{title}</div> : null}
      {children}
    </div>
  );
}

export function StandardsNote() {
  return (
    <Callout variant="note" title="A note on standards alignment">
      <p>{STANDARDS_NOTE}</p>
    </Callout>
  );
}

export function Badge({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: "navy" | "accent" | "muted";
}) {
  return <span className={`badge${variant ? ` badge--${variant}` : ""}`}>{children}</span>;
}

export function Card({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`card${className ? ` ${className}` : ""}`}>
      {eyebrow ? <div className="card__eyebrow">{eyebrow}</div> : null}
      {title ? <h3 className="card__title">{title}</h3> : null}
      <div className="card__body">{children}</div>
    </div>
  );
}

export function CardGrid({
  children,
  cols,
}: {
  children: ReactNode;
  cols?: 2;
}) {
  return <div className={`card-grid${cols === 2 ? " card-grid--2" : ""}`}>{children}</div>;
}

export function Jump({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className="jump no-print" aria-label="On this page">
      {items.map((i) => (
        <a key={i.href} href={i.href}>
          {i.label}
        </a>
      ))}
    </nav>
  );
}
