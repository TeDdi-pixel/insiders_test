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
        border: {
          DEFAULT: "hsl(var(--border))",
          foreground: "hsl(var(--border-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
