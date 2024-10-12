/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        "wave-animation": "wave-animation 1.5s linear infinite",
        "arrow-up-right": "arrow-up-right 0.5s ease-in-out alternate forwards",
      },
      keyframes: {
        "wave-animation": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "15%": {
            transform: "rotate(14deg)",
          },
          "30%": {
            transform: "rotate(-8deg)",
          },
          "40%": {
            transform: "rotate(14deg)",
          },
          "50%": {
            transform: "rotate(-4deg)",
          },
          "60%": {
            transform: "rotate(10deg)",
          },
          "70%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },

        "arrow-up-right": {
          "0%": {
            transform: "translate(0)",
          },
          "100%": {
            transform: "translate(3px, -3px)",
          },
        },
      },
    },
  },
  plugins: [],
};
