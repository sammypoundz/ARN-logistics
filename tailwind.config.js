/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E2F6E",
        secondary: "#F5F6FA",
        accent: "#1E40AF",
      },
    },
  },
  plugins: [],
};