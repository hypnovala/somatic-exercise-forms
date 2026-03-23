import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrintableSummary } from '@/components/forms/PrintableSummary';
import { formDefinitions, formLookup } from '@/data/forms';
import { FormSlug } from '@/types/forms';

export function generateStaticParams() {
  return formDefinitions.map((form) => ({ slug: form.slug }));
}

export function generateMetadata({ params }: { params: { slug: FormSlug } }): Metadata {
  const form = formLookup[params.slug];

  if (!form) {
    return {
      title: 'Printable summary | Somatic Exercise Forms',
    };
  }

  return {
    title: `${form.title} Summary | Somatic Exercise Forms`,
    description: `Printable summary for ${form.title}.`,
  };
}

export default function PrintPage({ params }: { params: { slug: FormSlug } }) {
  const form = formLookup[params.slug];

  if (!form) notFound();

  return <PrintableSummary form={form} />;
}
