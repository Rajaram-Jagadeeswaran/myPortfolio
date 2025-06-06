/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ← ADD THIS LINE
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
}
