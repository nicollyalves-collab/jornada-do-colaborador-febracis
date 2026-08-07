import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-10 flex flex-col gap-5 border-b border-border/60 pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
        <div className="gold-rule mt-4" />
        {subtitle && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </header>
  );
}

export function SectionTitle({ children, hint }: { children: ReactNode; hint?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-lg font-semibold sm:text-xl">{children}</h2>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
