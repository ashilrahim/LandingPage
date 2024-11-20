/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inknut: ['"Inknut Antiqua"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        outfit: [`"Outfit", sans-serif`]
      },
    },
  },
  plugins: [],
}