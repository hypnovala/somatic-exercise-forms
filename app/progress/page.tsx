import { ProgressOverview } from '@/components/progress/ProgressOverview';

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.18em] text-stone">Progress</p>
        <h1 className="text-4xl font-semibold text-ink">Your Saved Check-Ins</h1>
        <p className="max-w-3xl text-base leading-7 text-stone">
          View completed forms, return to drafts, and notice your patterns over time.
        </p>
      </section>
      <ProgressOverview />
    </div>
  );
}
