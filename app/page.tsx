import Link from 'next/link';
import { ArrowRight, CheckCircle2, LineChart, NotebookPen } from 'lucide-react';
import { formDefinitions } from '@/data/forms';
import { Card } from '@/components/ui/Card';
import { SectionIntro } from '@/components/ui/SectionIntro';

const features = [
  {
    title: 'Check in clearly',
    description: 'Track tension, stress, energy, and body cues in a simple format.',
    icon: CheckCircle2,
  },
  {
    title: 'Reflect gently',
    description: 'Use short prompts that support awareness without overwhelm.',
    icon: NotebookPen,
  },
  {
    title: 'Track your patterns',
    description: 'See what helps you feel steadier over time.',
    icon: LineChart,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <SectionIntro
            titleAs="h1"
            title="Somatic Exercise Forms for Everyday Nervous System Support"
            description="Simple guided check-ins to help you notice stress patterns, reconnect with your body, and take small supportive steps toward feeling more grounded."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/forms" className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
              Start a Form <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/progress" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink ring-1 ring-mist transition hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
              View Progress
            </Link>
          </div>
        </div>

        <Card className="p-6">
          <div className="rounded-[24px] border border-mist bg-gradient-to-br from-white to-warm/25 p-6">
            <p className="text-sm font-medium text-ink">
              Built for high-stress days, busy schedules, and real-life energy levels.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Why this helps"
          title="A calm structure for noticing, reflecting, and responding."
          description="When stress builds, it can become harder to notice what your body is asking for. These forms are designed to slow the moment down just enough to help you observe, reflect, and respond with more awareness."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/15 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Included forms"
          title="Core check-ins ready to support your day"
          description="Each form offers a steady, repeatable way to observe what is showing up, reflect on what feels supportive, and save your notes on this device."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {formDefinitions.map((form) => (
            <Card key={form.slug} className="p-5">
              <h3 className="text-base font-semibold text-ink">{form.title}</h3>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
