'use client';

import Link from 'next/link';
import { ArrowRight, Clock3 } from 'lucide-react';
import { FormDefinition, ProgressStatus } from '@/types/forms';
import { Card } from '@/components/ui/Card';
import { useSavedForms } from '@/lib/useSavedForms';

export function FormCard({ form }: { form: FormDefinition }) {
  const { currentStoredEntry, demoMode } = useSavedForms(form.slug);
  const status = currentStoredEntry?.status as ProgressStatus | undefined;

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="mb-5 flex items-center justify-between text-sm text-stone">
        <span className="rounded-full bg-sky/15 px-3 py-1 text-ink">{form.estimatedTime}</span>
        <span className="flex items-center gap-1"><Clock3 className="h-4 w-4" />Guided check-in</span>
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-semibold text-ink">{form.title}</h3>
          {status ? (
            <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${status === 'completed' ? 'bg-sage/15 text-ink' : 'bg-warm/35 text-ink'}`}>
              {status}
            </span>
          ) : null}
          {!status && demoMode ? (
            <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-stone ring-1 ring-mist">
              Ready
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-stone">{form.summary}</p>
        <p className="text-sm text-stone">{form.audience}</p>
      </div>
      <Link href={`/forms/${form.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink transition hover:text-sage">
        Open form <ArrowRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}
