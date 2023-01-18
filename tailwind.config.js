/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/images/hero-img.jpg')"
      }
    },
  },
  plugins: [],
};
