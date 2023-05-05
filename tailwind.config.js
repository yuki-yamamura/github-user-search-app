/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: 'hsl(212, 100%, 50%)',
        gray: 'hsl(217, 20%, 51%)',
        grayishBlue: 'hsl(217, 35%, 45%)',
        black: 'hsl(217, 21%, 21%)',
        lightBlue: 'hsl(227, 100%, 98%)',
        darkGray: 'hsl(222, 41%, 20%)',
      },
    },
  },
  plugins: [],
};
