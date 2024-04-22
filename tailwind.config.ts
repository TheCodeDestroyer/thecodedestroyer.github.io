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
        '25': '6.25rem',
        '29': '7.25rem'
      },
      backgroundImage: {
        'pattern-1': "url('/bg-1.svg')",
        'pattern-2': "url('/bg-2.svg')",
        halo: 'radial-gradient(85rem circle at var(--mouse-x) var(--mouse-y), rgba(255, 235, 211, 0.18), transparent 40%)'
      },
      backgroundPosition: {
        'position-me': 'bottom -6rem right 0rem',
        'position-about': 'left -18rem top -7rem',
        'position-technologies': 'bottom -26rem right -28rem',
        'position-experience': 'bottom -28rem right -10rem'
      },
      borderRadius: {
        inherit: 'inherit'
      },
      boxShadow: {
        '2lg': '0px 12px 24px -16px #0000001A'
      },
      fontSize: {
        lg: [
          '1.125rem',
          {
            lineHeight: '1.625rem',
            fontWeight: '400'
          }
        ],
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
        '8xl': [
          '3.125rem',
          {
            lineHeight: '3.875rem',
            fontWeight: '500'
          }
        ],
        '9xl': [
          '3.875rem',
          {
            lineHeight: '4.5rem',
            fontWeight: '500'
          }
        ],
        '10xl': [
          '7.875rem',
          {
            lineHeight: '8.75rem',
            fontWeight: '500'
          }
        ]
      },
      colors: {
        black: '#030405',
        accent: '#B6F09C',
        subtext: '#9FA0A2'
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
      minWidth: {
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '4/5': '80%',
        '100': '28rem',
        '75': '18.75rem'
      },
      blur: {
        '20xl': '200px'
      },
      zIndex: {
        '100': '100',
        '200': '200'
      },
      animation: {
        'border-spin': 'border-spin 10s linear infinite'
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)'
          }
        }
      }
    }
  },
  plugins: []
};

export default config;
