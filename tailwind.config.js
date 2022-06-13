module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      orange: '#f17147',
      blue: '#263d4c',
      lightgray: '#bbbbbb',
    },
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Yeseva: ['Yeseva One', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
}
