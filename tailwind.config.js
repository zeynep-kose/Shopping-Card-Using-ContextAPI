/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#00d4ff',
        'gradient-end': '#f7d94b',
      },
    },
  },
  plugins: [],
};
