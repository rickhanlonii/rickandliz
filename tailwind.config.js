const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      secondary: "#DFECE7",
      primary: "#f08e80",
      black: "#454545",
      faded: "#fdf0e6",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        orpheus: ["orpheuspro", ...defaultTheme.fontFamily.serif],
        neue: ["neue-haas-grotesk-display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
