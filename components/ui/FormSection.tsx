import { ReactNode } from 'react';

export function FormSection({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="space-y-4 rounded-[24px] border border-mist/80 bg-white/70 p-5">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        {description ? <p className="text-sm text-stone">{description}</p> : null}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
