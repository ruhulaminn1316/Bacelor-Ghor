/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        primaryLight: '#7C3AED',
        accent: '#8B5CF6',
        emerald: '#10B981',
        danger: '#EF4444',
        warning: '#F59E0B',
        cardBg: '#ffffff',
        panelBg: '#f8fafc',
        slateDark: '#0f1724',
      }
      ,
      boxShadow: {
        'soft-lg': '0 20px 60px rgba(15,23,42,0.12)',
        'panel': '0 10px 30px rgba(15,23,42,0.08)'
      },
      borderRadius: {
        'xl-2': '1.5rem',
        'xxl': '2rem'
      },
      fontFamily: {
        sans: ['Noto Sans Bengali', 'Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
