/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': '679px',
      // => @media (min-width: 679px) { ... }
    },
    extend: {},
  },
  plugins: [],
};