/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#111111',
        muted: '#888888',
        border: '#e5e5e5',
        surface: '#f9f9f9',
        accent: '#111111',
      },
    },
  },
  plugins: [],
}
