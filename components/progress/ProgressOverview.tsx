'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { formDefinitions } from '@/data/forms';
import { formatDateTime, percentComplete } from '@/lib/utils';
import { useSavedForms } from '@/lib/useSavedForms';
import { EmptyState } from './EmptyState';

export function ProgressOverview() {
  const { entries, demoMode, storedEntries } = useSavedForms();

  const completed = entries.filter((entry) => entry.status === 'completed').length;
  const drafts = entries.filter((entry) => entry.status === 'draft').length;
  const completion = percentComplete(completed, formDefinitions.length);
  const hasRealEntries = storedEntries.length > 0;

  if (!entries.length) {
    return (
      <EmptyState
        title="No saved forms yet."
        description="Start with a quick check-in and your progress will appear here."
        ctaHref="/forms"
        ctaLabel="Browse forms"
      />
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-stone">Progress tracker</p>
            <h2 className="text-2xl font-semibold text-ink">Observe what is becoming more consistent.</h2>
            <p className="text-sm leading-6 text-stone">
              View completed forms, return to drafts, and notice how repeated check-ins can support steadier routines.
            </p>
            {demoMode ? (
              <p className="rounded-2xl bg-sky/10 px-4 py-3 text-sm text-ink">
                Demo mode is active because no local entries have been saved on this device yet.
              </p>
            ) : null}
          </div>
          <div className="space-y-4 rounded-[24px] border border-mist bg-white p-5">
            <ProgressBar value={completion} label="Completed forms" />
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-2xl bg-canvas p-3"><div className="text-xl font-semibold text-ink">{completed}</div><div className="text-stone">Completed</div></div>
              <div className="rounded-2xl bg-canvas p-3"><div className="text-xl font-semibold text-ink">{drafts}</div><div className="text-stone">Drafts</div></div>
              <div className="rounded-2xl bg-canvas p-3"><div className="text-xl font-semibold text-ink">{formDefinitions.length}</div><div className="text-stone">Forms</div></div>
            </div>
          </div>
        </div>
      </Card>

      {!hasRealEntries && demoMode ? (
        <Card className="p-5 text-sm leading-6 text-stone">
          Sample entries are shown below so the progress layout is easy to preview before you save your own forms.
        </Card>
      ) : null}

      <div className="grid gap-4">
        {entries.map((entry) => (
          <Card key={entry.slug} className="p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-ink">{entry.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${entry.status === 'completed' ? 'bg-sage/15 text-ink' : 'bg-warm/35 text-ink'}`}>
                    {entry.status}
                  </span>
                  {demoMode && !hasRealEntries ? <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-stone ring-1 ring-mist">Sample</span> : null}
                </div>
                <p className="text-sm text-stone">Last updated {formatDateTime(entry.updatedAt)}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={`/forms/${entry.slug}`} className="rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white">Open form</Link>
                <Link href={`/print/${entry.slug}`} className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink ring-1 ring-mist">Printable summary</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
