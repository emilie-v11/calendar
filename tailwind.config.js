/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      border: '#f0f0f0',
      powderBlue: '#8fd6e0',
      shadow: 'rgba(0, 0, 0, 0.08)',
      peachPuff: '#ffc9a3',
      lightGrey: '#c2c2c2',
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
