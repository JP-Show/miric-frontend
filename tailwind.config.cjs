/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontSize: {
        '2xl': 64,
        xl: 48,
        lg: 32,
        md: 24,
        sm: 16,
        xm: 12
      },

      colors: {
        transparent: 'transparent',

        white: '#FFFFFF',

        gold: {
          200: '#DAA75D',
          500: '#D3943A'
        },
        gray: {
          200: '#CDCDCD',
          400: '#8C8C8C',
          600: '#363636',
          900: '#1D1D1D'
        },
        red: {
          200: '#BB4E4E',
          600: '#8F1B1B'
        }
      },

      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    }
  },
  plugins: []
}
