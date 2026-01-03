/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0B1120',
        surface: '#1E293B',
        primary: '#8B5CF6',
        'primary-glow': '#a78bfa',
        secondary: '#06b6d4',
        'secondary-glow': '#22d3ee',
        light: '#f8fafc',
        gray: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}