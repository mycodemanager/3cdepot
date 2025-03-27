/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF4500',
          50: '#FFF2EC',
          100: '#FFE5D9',
          200: '#FFCCB3',
          300: '#FFB38C',
          400: '#FF9966',
          500: '#FF8040',
          600: '#FF6619',
          700: '#FF4D00',
          800: '#CC3D00',
          900: '#992E00',
        }
      }
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border|ring)-brand(-[0-9]{1,3})?/,
      variants: ['hover', 'focus', 'active']
    },
    {
      pattern: /(bg|text|border|ring)-brand\/([0-9]|10)/
    }
  ],
  plugins: [],
}
