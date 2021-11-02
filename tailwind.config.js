module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainColor: "#F9F9F9",
        buttonColor: "#B7076B",
        grey5: "#E0E0E0",
        grey500: "#6B7280",
      },
      backgroundImage: {
        purpleImg: "url('./assets/Group 7128.png')",
        peopleImg: "url('./assets/people.png')",
      },
      height: {
        "90screen": "90vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
