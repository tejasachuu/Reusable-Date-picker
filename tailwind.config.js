/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00d4ff',
        'neon-purple': '#9b59b6',
        'neon-green': '#2ecc71',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00d4ff, #9b59b6, #2ecc71)',
      },
    },
  },
  plugins: [],
}
