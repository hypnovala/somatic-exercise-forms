export const siteTheme = {
  name: 'Brock Somatic Exercise Forms',
  tagline: 'Simple guided check-ins for steady, everyday support.',
  description:
    'A calm, mobile-first website with reusable somatic exercise forms, printable summaries, and local progress tracking.',
  colors: {
    canvas: '#F7F5F1',
    card: '#FFFFFF',
    ink: '#24313A',
    muted: '#61707A',
    primary: '#7FA3A3',
    secondary: '#A9B8C2',
    border: '#DCE3E3',
    warm: '#D8CBBE',
  },
} as const;

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  { href: '/forms', label: 'Forms' },
  { href: '/progress', label: 'Progress' },
  { href: '/about', label: 'About' },
] as const;
