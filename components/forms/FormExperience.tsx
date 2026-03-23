'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Printer, RotateCcw, Save } from 'lucide-react';
import { defaultValues, formSchemas } from '@/lib/validation';
import { clearEntry, saveEntry } from '@/lib/storage';
import { FormDefinition, FormSlug, FormValuesMap } from '@/types/forms';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Field } from '@/components/ui/Field';
import { FormSection } from '@/components/ui/FormSection';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { formatDateTime } from '@/lib/utils';
import { useSavedForms } from '@/lib/useSavedForms';
import { TrackerField } from './TrackerField';

export function FormExperience<K extends FormSlug>({ form }: { form: FormDefinition & { slug: K } }) {
  const [statusMessage, setStatusMessage] = useState('');
  const [completed, setCompleted] = useState(false);
  const { currentStoredEntry } = useSavedForms(form.slug);

  const formMethods = useForm<FormValuesMap[K]>({
    resolver: zodResolver(formSchemas[form.slug]),
    mode: 'onBlur',
    defaultValues: defaultValues[form.slug],
  });

  const watchedValues = formMethods.watch();
  const isSubmitting = formMethods.formState.isSubmitting;
  const isDirty = formMethods.formState.isDirty;

  useEffect(() => {
    if (currentStoredEntry) {
      formMethods.reset(currentStoredEntry.values as FormValuesMap[K]);
      setCompleted(currentStoredEntry.status === 'completed');
      setStatusMessage(currentStoredEntry.status === 'completed' ? 'Completed entry loaded from this device.' : 'Draft loaded from this device.');
      return;
    }

    formMethods.reset(defaultValues[form.slug]);
    setCompleted(false);
    setStatusMessage('This form is ready for a new entry on this device.');
  }, [currentStoredEntry, form.slug, formMethods]);

  const fieldCompletion = useMemo(() => {
    const values = watchedValues as FormValuesMap[K];

    if (form.slug === 'regulation-tracker') {
      const days = (values as FormValuesMap['regulation-tracker']).days;
      const checked = days.reduce(
        (count, day) =>
          count + Number(day.bodyScanCompleted) + Number(day.breathingCompleted) + Number(day.groundingCompleted) + Number(day.shoulderResetCompleted),
        0,
      );
      return Math.round((checked / 28) * 100);
    }

    const filled = Object.values(values).filter((value) => {
      if (Array.isArray(value)) return value.filter(Boolean).length > 0;
      return value !== '' && value !== null && value !== undefined;
    }).length;

    return Math.round((filled / form.fields.length) * 100);
  }, [form.fields.length, form.slug, watchedValues]);

  const onSaveDraft = () => {
    saveEntry(form.slug, form.title, formMethods.getValues(), 'draft');
    setCompleted(false);
    setStatusMessage('Draft saved locally on this device.');
  };

  const onClear = () => {
    formMethods.reset(defaultValues[form.slug]);
    clearEntry(form.slug);
    setCompleted(false);
    setStatusMessage('Saved entry cleared from this device.');
  };

  const onSubmit = async (values: FormValuesMap[K]) => {
    saveEntry(form.slug, form.title, values, 'completed');
    setCompleted(true);
    setStatusMessage('Form marked complete and saved locally on this device.');
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-stone">{form.estimatedTime}</p>
              <h1 className="mt-2 text-3xl font-semibold text-ink">{form.title}</h1>
            </div>
            <p className="text-sm leading-6 text-stone">{form.description}</p>
            <p className="rounded-2xl bg-canvas px-4 py-3 text-sm text-stone">{form.audience}</p>
            <ProgressBar value={fieldCompletion} label="Form progress" />
            <p aria-live="polite" className="rounded-2xl bg-sage/10 px-4 py-3 text-sm text-ink">
              {statusMessage}
            </p>
            {currentStoredEntry ? (
              <p className="rounded-2xl bg-white px-4 py-3 text-sm text-stone ring-1 ring-mist">
                Last saved {formatDateTime(currentStoredEntry.updatedAt)}.
              </p>
            ) : null}
            {completed ? (
              <div className="flex items-center gap-2 rounded-2xl bg-sage/15 px-4 py-3 text-sm font-medium text-ink">
                <CheckCircle2 className="h-4 w-4 text-sage" />
                Completed and ready for printing.
              </div>
            ) : (
              <p className="rounded-2xl bg-white px-4 py-3 text-sm text-stone ring-1 ring-mist">
                {isDirty ? 'You have unsaved changes on this form.' : 'Save a draft anytime, then return later on this same device.'}
              </p>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-ink">Form actions</h2>
          <div className="mt-4 grid gap-3">
            <Button onClick={onSaveDraft} variant="secondary" disabled={isSubmitting}>
              <Save className="mr-2 h-4 w-4" />Save draft
            </Button>
            <Button onClick={onClear} variant="ghost" disabled={isSubmitting}>
              <RotateCcw className="mr-2 h-4 w-4" />Clear form
            </Button>
            <Link
              href={`/print/${form.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink ring-1 ring-mist transition hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2"
            >
              <Printer className="mr-2 h-4 w-4" />Printable summary
            </Link>
          </div>
        </Card>
      </aside>

      <Card className="p-6 md:p-8">
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <FormSection title="Notice and observe" description="Complete each field in the way that feels most useful today.">
            {form.slug === 'regulation-tracker' ? (
              <TrackerField control={formMethods.control as any} />
            ) : (
              form.fields.map((field) => (
                <Field
                  key={field.name}
                  field={field}
                  register={formMethods.register as any}
                  control={formMethods.control as any}
                  errors={formMethods.formState.errors as any}
                />
              ))
            )}
          </FormSection>
          <div className="flex flex-col gap-3 border-t border-mist pt-6 sm:flex-row">
            <Button type="submit" className="sm:min-w-48" disabled={isSubmitting}>
              Mark complete
            </Button>
            <Button type="button" variant="ghost" onClick={onSaveDraft} disabled={isSubmitting}>
              Save draft
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
