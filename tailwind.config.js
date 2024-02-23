/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        
      },
      backgroundImage: {
        'hero-section': "url('/img/bg-hero-section.jpg')",
        'green-section': "url('/img/bg-green-section.jpg')",
      }
    },
  },
  plugins: [],
}

