/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offish-white': 'rgb(251, 250, 248)',
        'pinkish': 'rgb(249, 245, 242)',
        'target-pink': 'rgb(224, 57, 129)',
        'contacted-blue': 'rgb(78, 150, 186)',
        'meeting-purple': 'rgb(185, 178, 201)'
      },
    },
  },
  plugins: [],
}
