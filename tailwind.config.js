/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b0ff",
          500: "#3B82F6",
          600: "#2465e3",
          700: "#1e4bcc",
          800: "#1E3A8A",
          900: "#193169"
        },
        secondary: {
          50: "#edf1ff",
          100: "#dee6ff",
          200: "#c3d0ff",
          300: "#a0b1ff",
          400: "#8090ff",
          500: "#6b78f3",
          600: "#545de3",
          700: "#4548c6",
          800: "#3a3e99",
          900: "#333a76"
        },
        accent: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e"
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      },
      fontSize: {
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"]
      },
      spacing: {
        container: {
          padding: "1.5rem",
          maxWidth: "1280px"
        },
        section: {
          paddingY: "4rem"
        }
      }
    },
  },
  plugins: [],
} 