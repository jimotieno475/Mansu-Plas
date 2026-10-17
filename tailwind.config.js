/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#1c2922', forest: '#20392e', deep: '#172a22', moss: '#61735c', sand: '#d5bd8c', paper: '#f5f2e9', cream: '#fffdf8', muted: '#77786d', gold: '#867548' },
      fontFamily: { display: ['"Playfair Display"', 'Georgia', 'serif'], sans: ['"DM Sans"', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
}
