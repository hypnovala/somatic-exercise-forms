import Link from 'next/link';
import { ClipboardList } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function EmptyState({ title, description, ctaHref, ctaLabel }: { title: string; description: string; ctaHref: string; ctaLabel: string }) {
  return (
    <Card className="p-8 text-center md:p-10">
      <div className="mx-auto flex max-w-md flex-col items-center space-y-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky/15 text-ink">
          <ClipboardList className="h-6 w-6" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-ink">{title}</h2>
          <p className="text-sm leading-6 text-stone">{description}</p>
          <p className="text-sm text-stone">A short form is enough to get started. You can save your progress and return on this device anytime.</p>
        </div>
        <Link href={ctaHref} className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
          {ctaLabel}
        </Link>
      </div>
    </Card>
  );
}
