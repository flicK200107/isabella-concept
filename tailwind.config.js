/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['"Lato"', 'sans-serif'],
      },
      colors: {
        'cream': '#F9F7F2',
        'sage': '#A4B494',
        'gold': '#D4AF37',
        'charcoal': '#2C2C2C',
      }
    },
  },
  plugins: [],
}
