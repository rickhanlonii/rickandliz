const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#DFECE7",
        primary: "#F5A598",
        black: "#669999",
        faded: "#fdf0e6",
        white: "#ffffff",
      },
      fontFamily: {
        orpheus: ["orpheuspro", ...defaultTheme.fontFamily.serif],
        neue: ["neue-haas-grotesk-display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
