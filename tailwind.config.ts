import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space_grotesk)'],
        'plus-jakarta-sans': ['var(--font-plus_jakarta_sans)']
      },
      height: {
        '25': '6.25rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontSize: {
        'text-2xl': '1.625rem',
        '3xl': '2.125rem'
      },
      colors: {
        black: '#030405',
        accent: '#B6F09C'
      },
      letterSpacing: {
        button: '0.009em'
      }
    }
  },
  plugins: []
};

export default config;
