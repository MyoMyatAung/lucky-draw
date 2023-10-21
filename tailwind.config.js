/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        w01arthouse: ["w01arthouse", "sans-serif"]
      },
      colors: {
        "primary-orange": "#FF5722",
        "gold": "#FFD700",
        "sky": "rgb(147, 230, 241)",
        "awba-blue": "rgb(9,64,136)",
      },
    },
  },
  plugins: [],
};
