import { Card } from '@/components/ui/Card';
import { SectionIntro } from '@/components/ui/SectionIntro';

const principles = [
  'Notice what is present without pressure to do it perfectly.',
  'Use short forms that fit into busy, high-stress schedules.',
  'Keep entries local to the device so the experience stays simple and private.',
  'Support reflection, grounding, and regulation without medical or therapy claims.',
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionIntro
        titleAs="h1"
        eyebrow="About"
        title="About Brock Somatic Exercise Forms"
        description="A calm, educational website for body-based check-ins, regulation tracking, and printable summaries."
      />

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-6 md:p-8">
          <div className="space-y-5 text-base leading-8 text-stone">
            <p>
              Somatic exercise forms are simple guided reflection tools that help you pay attention to body sensations, stress patterns, and supportive regulation practices. This website is designed for educational self-awareness and everyday nervous system support.
            </p>
            <p>
              These forms are not about doing everything perfectly. They are here to help you notice what is present, reflect on what feels supportive, and build a steadier relationship with your body one check-in at a time.
            </p>
            <p>
              Entries are saved locally in your browser so you can return to drafts, observe progress, and print summaries without needing an account or backend setup.
            </p>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-ink">How this app is designed</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-stone">
            {principles.map((principle) => (
              <li key={principle} className="rounded-2xl bg-canvas px-4 py-3 ring-1 ring-mist">
                {principle}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
