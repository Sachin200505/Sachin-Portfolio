/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ must be 'class' for manual toggling
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        // Optional: Add more readable custom names
        'light-bg-start': '#bfedfd',
        'light-bg-end': '#8fd5fa',
      },
      backgroundImage: {
        // ✅ Custom gradient name for light theme
        'light-gradient': 'linear-gradient(to bottom right, #bfedfd, #8fd5fa)',
      },
    },
  },
  plugins: [],
};
