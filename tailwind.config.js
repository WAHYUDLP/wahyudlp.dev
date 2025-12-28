/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // PENTING: Agar fitur dark mode jalan
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // Ini warna biru dari website lama kamu
        primary: '#1d4ed8', 
        dark: '#0f172a',
        secondary: '#64748b',
      },
      fontFamily: {
        // Ini font yang kamu pakai sebelumnya
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}