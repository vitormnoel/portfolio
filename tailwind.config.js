/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./app/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        system: ["system-ui", "sans-serif"],
      },
      colors: {
        blue: {
          linkedin: "#0A66C2",
        },
        slate: {
          git: "#24292e",
        },
        green: {
          pastel: "#C6E8C6",
          dark: "#88B988"
        }
      },
    },
  },
  plugins: [],
};
