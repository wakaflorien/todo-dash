/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#A2B0CB',
        'tertiary': '#5147C2',
        'content-bg': '#F5F8FA',
      },
    },
  },
  plugins: [],
}