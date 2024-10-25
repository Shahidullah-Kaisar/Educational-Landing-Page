/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    fontFamily: {
      Arima: ["Arima", "system-ui"],
      Lobster: ["Lobster", "serif"]
    },
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

