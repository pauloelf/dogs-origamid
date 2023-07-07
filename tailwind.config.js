/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Helvetica', 'Arial', 'sans-serif'],
        'secondary': ['Spectral', 'Georgia'],
      },
      boxShadow: {
        'btn': '0 0 0 3px #fea, 0 0 0 4px #fb1'
      },
      animation: {
        'left': 'animaLeft .2s forwards'
      },
      keyframes: {
        animaLeft: {
          'from': {
            transform: 'translateX(-20px)',
            opacity: '0'
          },
          'to': {
            transform: 'initial',
            opacity: '1'
          }
        }
      },
      backgroundImage: {
        'login': "url('/src/assets/images/login.jpg')"
      },
    },
  },
  plugins: [],
}
