/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        primaryLight: '#60a5fa',
        accent: '#14b8a6',
        emerald: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
        cardBg: '#ffffff',
        panelBg: '#f8fafc',
        slateDark: '#0f1724',
      },
      boxShadow: {
        'soft-lg': '0 20px 60px rgba(15,23,42,0.12)',
        panel: '0 10px 30px rgba(15,23,42,0.08)',
      },
      borderRadius: {
        'xl-2': '1.5rem',
        xxl: '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
