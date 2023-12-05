/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '2xl': '27px',
      '3xl': '16px',
    },
    extend: {
      width: {
        20: '900px',
        40: '300px',
      },
    },
  },
  plugins: [],
};
