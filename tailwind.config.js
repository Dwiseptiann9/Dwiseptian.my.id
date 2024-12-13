/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          card: '#1e1e1e',
          input: '#333333',
          border: '#555555',
        },
      },
      backgroundColor: {
        'dark-hover': '#2a2a2a',
      },
    },
  },
  plugins: [],
};