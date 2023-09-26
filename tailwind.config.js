/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'light-purple': '#D1BEF9',
      'dark-purple': '#463174',
      'mid-purple': '#593F92',
      'light': '#FFFFFF',
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        'lg': { 'min': '1280px', 'raw': '(min-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)' }, // Use 'lg' for MacBook
        'tablet': { 'min': '1024px', 'raw': '(min-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)' }, // Use 'tablet' for iPad Pro
      },
    },
  },
  plugins: [],
}
