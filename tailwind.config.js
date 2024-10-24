/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "540",
      lg: "768",
      xl: "1180px"
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
        sm: "48px",
      }
    }
  },
  plugins: [],
}

