import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FormExperience } from '@/components/forms/FormExperience';
import { formDefinitions, formLookup } from '@/data/forms';
import { FormSlug } from '@/types/forms';

export function generateStaticParams() {
  return formDefinitions.map((form) => ({ slug: form.slug }));
}

export function generateMetadata({ params }: { params: { slug: FormSlug } }): Metadata {
  const form = formLookup[params.slug];

  if (!form) {
    return {
      title: 'Form not found | Brock Somatic Exercise Forms',
    };
  }

  return {
    title: `${form.title} | Brock Somatic Exercise Forms`,
    description: form.summary,
  };
}

export default function FormDetailPage({ params }: { params: { slug: FormSlug } }) {
  const form = formLookup[params.slug];

  if (!form) {
    notFound();
  }

  return <FormExperience form={form} />;
}
