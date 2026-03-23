'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { formatDate, formatDateTime } from '@/lib/utils';
import { FormDefinition, FormSlug, TrackerDay } from '@/types/forms';
import { useSavedForms } from '@/lib/useSavedForms';

function formatLabel(value: string) {
  return value
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .replace(/^./, (character) => character.toUpperCase())
    .trim();
}

function renderTrackerDays(days: TrackerDay[]) {
  return days
    .map((day) => {
      const completed = [
        day.bodyScanCompleted ? 'Body scan' : null,
        day.breathingCompleted ? 'Breathing' : null,
        day.groundingCompleted ? 'Grounding' : null,
        day.shoulderResetCompleted ? 'Shoulder reset' : null,
      ].filter(Boolean);

      return `Day ${day.day}: ${completed.length ? completed.join(', ') : 'No activities checked'}${day.notes ? ` — ${day.notes}` : ''}`;
    })
    .join('\n');
}

function renderValue(fieldName: string, value: unknown): string {
  if (fieldName === 'date' && typeof value === 'string') {
    return formatDate(value);
  }

  if (fieldName === 'days' && Array.isArray(value)) {
    return renderTrackerDays(value as TrackerDay[]);
  }

  if (Array.isArray(value)) {
    return value.length ? value.map((item) => String(item)).join(', ') : 'Not provided';
  }

  if (typeof value === 'string' && value === 'a-little') return 'A little';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return String(value ?? 'Not provided');
}

export function PrintableSummary({ form }: { form: FormDefinition & { slug: FormSlug } }) {
  const { currentEntry, demoMode } = useSavedForms(form.slug);

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="flex flex-col gap-4 print:hidden md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-stone">Printable summary</p>
          <h1 className="text-4xl font-semibold text-ink">{form.title}</h1>
        </div>
        <div className="flex gap-3">
          <Link href={`/forms/${form.slug}`} className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink ring-1 ring-mist">Back to form</Link>
          <button type="button" onClick={() => window.print()} className="rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white">Print page</button>
        </div>
      </div>
      <Card className="p-8 print:rounded-none print:border-0 print:shadow-none">
        <div className="space-y-4 border-b border-mist pb-6">
          <p className="text-sm uppercase tracking-[0.18em] text-stone">Somatic Exercise Forms</p>
          <h2 className="text-3xl font-semibold text-ink">{form.title}</h2>
          <p className="max-w-3xl text-sm leading-6 text-stone">{form.summary}</p>
          {currentEntry ? (
            <div className="space-y-1 text-sm text-stone">
              <p>Last saved {formatDateTime(currentEntry.updatedAt)}</p>
              <p>Status: {formatLabel(currentEntry.status)}</p>
              {demoMode ? <p>Showing sample data because no local entry has been saved yet.</p> : null}
            </div>
          ) : null}
        </div>
        {!currentEntry ? (
          <div className="mt-6 rounded-[24px] border border-dashed border-mist p-6 text-sm leading-6 text-stone">
            No saved local entry was found for this form yet. Complete the interactive form first, then return here to print a populated summary.
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {form.fields.map((field) => (
              <div key={field.name} className="rounded-[24px] border border-mist bg-canvas p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-stone">{field.label}</h3>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-ink">
                  {renderValue(field.name, (currentEntry.values as Record<string, unknown>)[field.name])}
                </p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
