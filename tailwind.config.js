/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#0a0a0a',
          surface: '#121212',
          card: '#161616',
          border: '#222222',
          borderHover: '#333333',
          textMuted: '#a1a1aa',
          textOffWhite: '#f4f4f5',
        },
        accent: {
          light: '#7dd3fc',
          DEFAULT: '#38bdf8', // Electric sky blue accent
          hover: '#0ea5e9',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          800: '#1e293b',
          850: '#0f172a',
          900: '#0b1120',
          920: '#080d19',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        heading: ['"Times New Roman"', 'Times', 'Tinos', 'Baskerville', 'Georgia', 'serif'],
        body: ['"Times New Roman"', 'Times', 'Tinos', 'Georgia', 'serif'],
        sans: ['"Times New Roman"', 'Times', 'Tinos', 'Georgia', 'serif'],
        serif: ['"Times New Roman"', 'Times', 'Tinos', 'Georgia', 'serif'],
        mono: ['"Times New Roman"', 'Times', 'Tinos', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeRev 28s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};


