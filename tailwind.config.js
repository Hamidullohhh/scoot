/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/images/bg_img.jpg')",
        'bit': "url('/src/images/Bitmap.svg')",
      },
      colors: {
        dark_gray: "#495567",
        footer: "#333A44",
        gray: "#939CAA",
        orange: "#FCB72B",
        snow: "#F2F5F9",
      },
    },
  },
  plugins: [],
});
