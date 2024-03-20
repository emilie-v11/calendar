/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      'dark-salmon': '#fc8f70',
      border: '#f0f0f0',
      white: '#fff',
      'powder-blue': '#8fd6e0',
      shadow: 'rgba(0, 0, 0, 0.08)',
      'dark-turquoise': '#36c7d4',
      'text-light': '#727272',
      'peach-puff': '#ffc9a3',
      'light-grey': '#c2c2c2',
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e4e4e7',
      },
    },
    extend: {},
  },
  plugins: [],
};
