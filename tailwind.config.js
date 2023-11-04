/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter, sans-serif',
      },
      colors: {
        'job-primary': '#00BF63',
        'job-dark-primary': '#050a30',
      }
    },
  },
  plugins: [require("daisyui")],
}

