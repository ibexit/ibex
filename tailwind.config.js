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
        'primaryBlue': '#4a7edd',
        'darkBlue': '#18233f',
        'lightBlue': '#f0f5fc',
        'mediumGray': '#F0F3F9'
        
      },
      backgroundImage: {
        'hero-section': "url('/img/bg-hero-section.jpg')",
        'green-section': "url('/img/bg-green-section.jpg')",
      }
    },
  },
  plugins: [],
}

