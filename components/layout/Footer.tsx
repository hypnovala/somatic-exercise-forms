import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-mist/80 bg-white/60 py-6 text-sm text-stone">
      <Container className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p>Somatic Exercise Forms</p>
        <p>Education only. Not medical advice.</p>
      </Container>
    </footer>
  );
}
