/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        bold: 'hsl(var(--bold) / <alpha-value>)',
        lightBlue: 'hsl(212, 100%, 69%)',
        red: 'hsla(0, 91%, 62%, 1)',
      },
      screens: {
        xs: '540px',
      },
    },
  },
  plugins: [],
};
