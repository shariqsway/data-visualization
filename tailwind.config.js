/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#e76f51",
        primaryLight: "#fbe9e5",
        primaryDark: "#e56443",
      },
    },
  },
  plugins: [],
};
