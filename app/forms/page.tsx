import { FormCard } from '@/components/forms/FormCard';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { formDefinitions } from '@/data/forms';

export default function FormsPage() {
  return (
    <div className="space-y-8">
      <SectionIntro
        titleAs="h1"
        eyebrow="Forms library"
        title="Choose a form based on what you need right now."
        description="You can complete one form in a few minutes, save your progress, and come back anytime on this device."
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {formDefinitions.map((form) => (
          <FormCard key={form.slug} form={form} />
        ))}
      </section>
    </div>
  );
}
