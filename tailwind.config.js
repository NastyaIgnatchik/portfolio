/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "color-bg": "#1f1f38",
      "color-bg-variant": "#2c2c6c",
      "color-primary": "#4db5ff",
      "color-primary-variant": "rgba(77,181,255,0.4)",
      "color-white": "#fff",
      "color-light": "rgba(255,255,255,0.6)",
    },

    backgroundImage: {
      "body-texture": "url('../public/image/pageImage/bg-image.png')",
    },
  },

  plugins: [],
};
