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
      padding: {
        '25': '6.25rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontSize: {
        '2xl': [
          '1.625rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '500'
          }
        ],
        '4xl': [
          '2.125rem',
          {
            lineHeight: '2.625rem',
            fontWeight: '500'
          }
        ],
        '9xl': [
          '3.875rem',
          {
            lineHeight: '4.5rem',
            fontWeight: '500'
          }
        ]
      },
      colors: {
        black: '#030405',
        accent: '#B6F09C'
      },
      letterSpacing: {
        button: '0.009em'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem'
      },
      blur: {
        '20xl': '200px'
      },
      zIndex: {
        '100': '100',
        '200': '200'
      }
    }
  },
  plugins: []
};

export default config;
