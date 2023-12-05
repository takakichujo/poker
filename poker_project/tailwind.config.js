/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        20: '900px',
      },
    },
  },
  plugins: [],
};
