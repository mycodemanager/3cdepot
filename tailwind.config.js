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
    'bg-brand',
    'text-brand',
    'hover:bg-brand',
    'hover:text-brand',
    'focus:ring-brand',
    'bg-brand-50',
    'hover:bg-brand-50',
    'bg-brand-900',
    'hover:bg-brand-900',
  ],
  plugins: [],
}
