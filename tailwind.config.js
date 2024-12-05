/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        inknut: ['"Inknut Antiqua"', "serif"],
        playfair: ['"Playfair Display"', "serif"],
        outfit: [`"Outfit", sans-serif`],
        raleway: [`"raleway", sans-serif`],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
