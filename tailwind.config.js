const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/**.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        heading: '#7B8794',
        secondary: '#F5F7FA'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus', 'active'],
      borderColor: ['group-focus'],
      boxShadow: ['group-focus'],
      opacity: ['group-focus'],
      textColor: ['group-focus', 'active'],
      textDecoration: ['group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
