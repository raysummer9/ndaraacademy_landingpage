/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf9f1',
          200: '#faf0d8',
          300: '#f6e4b8',
          400: '#f0d18e',
          500: '#e8b95a',
          600: '#e0a12b',
          700: '#c78a1f',
          800: '#a36e1c',
          900: '#855a1c',
        },
      },
    },
  },
  plugins: [],
}
