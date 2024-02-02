/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ModerateViolet: 'hsl(263, 55%, 52%)',
        VeryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        VeryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
      }
    },
  },
  plugins: [],
}