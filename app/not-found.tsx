import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export default function NotFound() {
  return (
    <Card className="mx-auto max-w-2xl p-8 text-center">
      <p className="text-sm uppercase tracking-[0.18em] text-stone">Page not found</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink">That page is not available.</h1>
      <p className="mt-3 text-sm leading-6 text-stone">
        Return to the home page or browse the forms library to continue with a steady, structured reset.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white">Go home</Link>
        <Link href="/forms" className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink ring-1 ring-sage/30">View forms</Link>
      </div>
    </Card>
  );
}
