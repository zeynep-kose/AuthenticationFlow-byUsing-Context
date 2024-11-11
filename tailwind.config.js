/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-rainbow": "linear-gradient(to right, #ff7e5f, #feb47b)",
        "gradient-blue": "linear-gradient(to right, #4e73df, #1cc88a)",
        "gradient-to-black": "linear-gradient(to bottom, #ffffff, #000000)",
      },
    },
  },
  plugins: [],
};
