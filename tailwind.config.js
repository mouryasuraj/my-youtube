import tailwindScrollBar from 'tailwind-scrollbar'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollBar
  ],
}

