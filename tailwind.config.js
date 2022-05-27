const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      'display': ['Carter One', 'cursive'],
      'body': ['Roboto', 'sans-serif']
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
