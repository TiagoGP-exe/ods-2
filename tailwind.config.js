/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.{edge,js,ts,jsx,tsx}', // 👈
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
        lg: '1120px',
      },
    },
  },
  plugins: [],
}
