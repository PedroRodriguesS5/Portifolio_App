/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xs': '280px',
        'sm': '320px',
        'md': '481px',
        'lg': '769px',
        'xl': '1025px',
        '2xl': '1920px'
      },
    },
    extend: {
      colors: {
        "button-color": "#607D8F",
        "bg-primary": "#161616",
        "text-color": "#ffc82f",
        "bg-secondary": "#1C1C1C",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}