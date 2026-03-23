import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F5F1',
        card: '#FFFFFF',
        ink: '#24313A',
        stone: '#61707A',
        sage: '#7FA3A3',
        sky: '#A9B8C2',
        mist: '#DCE3E3',
        warm: '#D8CBBE',
      },
      boxShadow: {
        calm: '0 16px 40px rgba(36, 49, 58, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
