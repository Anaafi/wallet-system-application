/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './src/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        blue: {
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
        },
        gray: {
          100: 'var(--gray-100)',
          300: 'var(--gray-300)',
          500: 'var(--gray-200)',
          800: 'var(--gray-800)',
          1000: 'var(--gray-1000)',
        },
        red: {
          100: 'var(--red-100)',
        },
        green: {
          100: 'var(--green-100)',
        },
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
};
