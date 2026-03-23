'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeartPulse } from 'lucide-react';
import { Container } from './Container';
import { cn } from '@/lib/utils';
import { primaryNavigation, siteTheme } from '@/lib/theme';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-mist/80 bg-canvas/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage/20 text-sage">
            <HeartPulse className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone">{siteTheme.name}</p>
            <p className="text-sm text-stone">{siteTheme.tagline}</p>
          </div>
        </Link>
        <nav className="hidden gap-2 md:flex">
          {primaryNavigation.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  active ? 'bg-sage/15 text-ink' : 'text-stone hover:bg-white hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
