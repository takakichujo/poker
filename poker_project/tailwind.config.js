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
        20: '920px',
        40: '300px',
        50: '100px',
        60: '140px',
        70: '960px',
      },
      height: {
        50: '100px',
        60: '180px',
      },
    },
  },
  plugins: [],
};
