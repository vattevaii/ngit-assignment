/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent: {
          light: "#e0767c66",
          solid: "#e0767c"
        }
      },
      boxShadow:{
        pop: "#fff 8px 8px 8px 2px inset, #000 -8px -8px 6px 1px inset"
      }
    },
  },
  plugins: [],
};
