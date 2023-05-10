/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
    },
    extend: {
      colors: {
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
