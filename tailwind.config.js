/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#0A0A0D',
          'gold': '#CFAB60',
          'brilliance': '#FFFFFF',
          'surface': '#16171C',
          'muted': '#9E9AA3',
          'bronze': '#8C6D3B',
          'border': 'rgba(207, 171, 96, 0.20)'
        }
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
