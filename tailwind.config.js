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
        'left': 'animaLeft .2s forwards',
        'scaleup': 'scaleUp .3s forwards',
        'blink': 'latir .6s infinite',
        'skeleton': 'skeleton 1.5s infinite linear'
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
        },
        scaleUp: {
          'from': {
            transform: 'scale(.8)',
            opacity: '0'
          },
          'to': {
            transform: 'initial',
            opacity: 'initial'
          }
        },
        latir: {
          'from': {
            opacity: '0'
          },
          'to': {
            opacity: '1'
          }
        },
        skeleton: {
          'from': {
            backgroundPosition: '0px'
          },
          'to': {
            backgroundPosition: '-200%'
          }
        }
      },
      backgroundImage: {
        'login': "url('/src/assets/images/login.jpg')"
      },
      screens: {
        smmd: '64rem'
      }
    },
  },
  plugins: [],
}
