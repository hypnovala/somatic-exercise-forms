import type { ReactNode } from 'react';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileNav } from './MobileNav';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <Container className="pb-32 pt-8 md:pb-12 md:pt-10">
        <main>{children}</main>
      </Container>
      <Footer />
      <MobileNav />
    </div>
  );
}
