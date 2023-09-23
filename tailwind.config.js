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

      fontFamily:{
        'poppins': ['Poppins']
      }

    },
  },
  plugins: [],
}