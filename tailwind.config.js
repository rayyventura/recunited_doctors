/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': "#09021d",
        'dark': "#07423f",
        'clear-blue':"#006deb"
      }
    },
  },
  plugins: [],
}