/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        "50%": "50%",
        "145%": "145%",
      }
    },
  },
  plugins: [],
};
