import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  titleAs = 'h2',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
  titleAs?: 'h1' | 'h2';
}) {
  const TitleTag = titleAs;

  return (
    <div className={cn('space-y-3', align === 'center' && 'text-center')}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.18em] text-stone">{eyebrow}</p> : null}
      <TitleTag className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</TitleTag>
      {description ? <p className="max-w-3xl text-base leading-7 text-stone">{description}</p> : null}
      {action ? <div>{action}</div> : null}
    </div>
  );
}
