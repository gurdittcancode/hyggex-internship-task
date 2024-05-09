/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark_blue: 'var(--dark-blue)',
        gray_text: 'var(--gray-text)',
      },
    },
  },
  plugins: [],
};
