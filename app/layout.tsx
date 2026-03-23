import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteShell } from '@/components/layout/SiteShell';
import { siteTheme } from '@/lib/theme';

export const metadata: Metadata = {
  title: {
    default: siteTheme.name,
    template: `%s | ${siteTheme.name}`,
  },
  description: siteTheme.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
