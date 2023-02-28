/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      primary: '.3rem',

    },
    colors: {
      'primary': '#000000',
      'secondary': '#0C1539',
      'tertiary': '#696773',
      'green': '#819595',
      'green-two': '#B1B6A6',
      'white': '#FFFFFF'
    },
  },
  plugins: [],
};