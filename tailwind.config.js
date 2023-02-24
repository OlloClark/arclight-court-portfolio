/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bigBlue': "url('/images/bigBlue.jpg')",
      }
    },
  },
  plugins: [],
}
