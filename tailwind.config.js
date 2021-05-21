module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203,89%,53%)",
          dark: "hsl(203,89%,46%)",
          light: "hsl(203,89%,96%)",
        },
        gray: {
          dark: "#657786",
          lightGray: "#AAB8C2",
          lightest: "#F5F8FA",
        },
        black: "#14171A"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}