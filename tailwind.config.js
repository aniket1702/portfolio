/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060610',
        surface: '#09091a',
        panel: '#0d0d20',
        accent: '#00e5ff',
        accent2: '#a855f7',
        accent3: '#f97316',
        muted: '#6b7280',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
