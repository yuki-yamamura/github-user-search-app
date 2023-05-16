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
        bold: 'hsl(var(--bold) / <alpha-value>)',
        black: 'hsl(217, 21%, 21%)',
        blue: 'hsl(212, 100%, 50%)',
        darkGray: 'hsl(222, 41%, 20%)',
        gray: 'hsl(217, 20%, 51%)',
        grayishBlue: 'hsl(217, 35%, 45%)',
        lightBlue: 'hsl(227, 100%, 98%)',
        red: 'hsla(0, 91%, 62%, 1)',
      },
      screens: {
        xs: '540px',
      },
    },
  },
  plugins: [],
};
