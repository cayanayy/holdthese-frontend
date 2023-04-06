/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bouncing: "bouncein 1s ease",
      },
      keyframes: {
        bouncein: {
          "0%": {
            transform: "scale(0.1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "70%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      boxShadow: {
        custom: "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
      },
      colors: {
        primary: "#f9d3b4",
        secondary: "#a1a1a1",
        background: "#1f2123",
        "dark-background": "#212426",
      },
    },
    plugins: [],
  },
};
