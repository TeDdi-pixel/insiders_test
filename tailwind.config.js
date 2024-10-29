/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Karla", "sans-serif"],
      default: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
        button: {
          DEFAULT: "hsl(var(--button))",
          foreground: "hsl(var(--button-foreground))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--background-foreground))",
        },
      },
    },
  },
  plugins: [],
};
