module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Yeseva: ['Yeseva One', 'cursive'],
      },
      colors: {
        primary: '#f17147',
        secondary: '#263d4c',
        tertiary: '#bbbbbb',
        lightgray: '#bbbbbb',
      },
    },
  },
  plugins: [require('daisyui')],
}
