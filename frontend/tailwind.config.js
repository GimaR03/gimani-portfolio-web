/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 60% - Primary/Background colors
        primary: {
          light: '#f8fafc',  // slate-50
          DEFAULT: '#f1f5f9', // slate-100
          dark: '#0f172a',   // slate-900
        },
        // 30% - Secondary colors
        secondary: {
          light: '#e2e8f0',  // slate-200
          DEFAULT: '#64748b', // slate-500
          dark: '#1e293b',   // slate-800
        },
        // 10% - Accent colors
        accent: {
          light: '#3b82f6',  // blue-500
          DEFAULT: '#2563eb', // blue-600
          dark: '#60a5fa',   // blue-400
        }
      }
    },
  },
  plugins: [],
}

