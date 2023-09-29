/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        customPrimary: '#2E0226',
        customWhite: '#FAFAFA',
        customViolet: '#47033B',
        customPink: '#FF006E',
        customBlue: '#00B1F7',
        customGreen: '#00F7AD',
        customGray: '#585858',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
      }
    },
  },
  plugins: [],
}

