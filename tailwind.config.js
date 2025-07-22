/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#183A52',
        'primary-yellow': '#FFD147',
        'secondary-white': '#FFFFFF',
        'accent-red': '#E54D42',
        'accent-orange': '#F5A623',
        'accent-light-blue': '#50A6C2',
        'accent-green': '#7ED321',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
