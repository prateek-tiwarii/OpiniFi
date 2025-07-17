/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "system-ui", "sans-serif"],
        sans: ["Roboto", "system-ui", "sans-serif"], // Make Roboto the default sans font
      },
    },
  },
  plugins: [],
};
