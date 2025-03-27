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
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
