/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    dropShadow: {
      "2xl": "0 15px 20px rgba(0, 0, 0, 0.40)",
      "3xl": "0 35px 35px rgba(0, 0, 0, 0.55)",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
    },
    backgroundImage: {
      "white-theme-bg": "url('/public/images/white-theme-bg.svg')",
    },
    colors: {
      visgreen: "#02E7B8",
      white: "#fff",
      deepnavy: "#27375A",
      whiteiconbg: "#efefef",
    },
  },
  plugins: [],
};
