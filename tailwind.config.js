/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        verde: '#126a61',
        rojo: '#980000',
        naranja: '#b07f3d'
      }
    }
  },
  plugins: []
}
