/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f6f7f9',
          100: '#e3e5ea',
          200: '#c7cbd3',
          300: '#a3aab7',
          400: '#7b8498',
          500: '#606879',
          600: '#4d5261',
          700: '#3d414d',
          800: '#2d2f37',
          900: '#1d1e24',
          950: '#121316',
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.accent.500), 0 0 20px theme(colors.accent.500)',
        '3d': '0 0 15px rgba(139, 92, 246, 0.5), 0 0 45px rgba(139, 92, 246, 0.2)',
      },
    },
  },
  plugins: [],
};