/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './html/**/*.html',
    './js/**/*.js',
    
  ],


  theme: {

    
    extend: {
      container: {
        center: true,
      },
      
     
      colors: {
        'light-purple': '#D1BEF9',
        'dark-purple': '#463174',
        'mid-purple': '#593F92',
        'light': '#FFFFFF',
        
      },
    },
  },
  plugins: [],
};
