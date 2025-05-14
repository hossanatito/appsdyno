
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          50: "#f0f4ff",
          100: "#d9e4ff",
          200: "#bccfff",
          300: "#8eafff",
          400: "#5986ff",
          500: "#3060ff",
          600: "#1e3ff8",
          700: "#1632e5",
          800: "#1829ba",
          900: "#1b2994",
          950: "#131755",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDEwMzI1IiBkPSJNMCAwaDI1NnYyNTZIMHoiLz48cGF0aCBmaWxsPSIjMDgwQjQyIiBkPSJNMjU2IDBoMjU2djI1NkgyNTZ6Ii8+PHBhdGggZmlsbD0iIzA0MDQxRSIgZD0iTTUxMiAwaDI1NnYyNTZINTEyeiIvPjxwYXRoIGZpbGw9IiMwMTAzMjUiIGQ9Ik03NjggMGgyNTZ2MjU2SDc2OHoiLz48cGF0aCBmaWxsPSIjMDUwNzMzIiBkPSJNMTAyNCAwaDI1NnYyNTZoLTI1NnoiLz48cGF0aCBmaWxsPSIjMDQwNTJBIiBkPSJNMTI4MCAwaDI1NnYyNTZoLTI1NnoiLz48cGF0aCBmaWxsPSIjMDQwNDFFIiBkPSJNMCAyNTZoMjU2djI1NkgweiIvPjxwYXRoIGZpbGw9IiMwNzA2MkQiIGQ9Ik0yNTYgMjU2aDI1NnYyNTZIMjU2eiIvPjxwYXRoIGZpbGw9IiMwMTAzMjUiIGQ9Ik01MTIgMjU2aDI1NnYyNTZINTEyeiIvPjxwYXRoIGZpbGw9IiMwNTA3MzMiIGQ9Ik03NjggMjU2aDI1NnYyNTZINzY4eiIvPjxwYXRoIGZpbGw9IiMwODA5MzgiIGQ9Ik0xMDI0IDI1NmgyNTZ2MjU2aC0yNTZ6Ii8+PHBhdGggZmlsbD0iIzA0MDUyQSIgZD0iTTEyODAgMjU2aDI1NnYyNTZoLTI1NnoiLz48cGF0aCBmaWxsPSIjMDUwNzMzIiBkPSJNMCA1MTJoMjU2djI1NkgweiIvPjxwYXRoIGZpbGw9IiMwNzA2MkQiIGQ9Ik0yNTYgNTEyaDI1NnYyNTZIMjU2eiIvPjxwYXRoIGZpbGw9IiMwNDA1MkEiIGQ9Ik01MTIgNTEyaDI1NnYyNTZINTEyeiIvPjxwYXRoIGZpbGw9IiMwNjA4M0EiIGQ9Ik03NjggNTEyaDI1NnYyNTZINzY4eiIvPjxwYXRoIGZpbGw9IiMwMTA2MjgiIGQ9Ik0xMDI0IDUxMmgyNTZ2MjU2aC0yNTZ6Ii8+PHBhdGggZmlsbD0iIzA0MDQxRSIgZD0iTTEyODAgNTEyaDI1NnYyNTZoLTI1NnoiLz48cGF0aCBmaWxsPSIjMDcwNjJEIiBkPSJNMCA3NjhoMjU2djI1NkgweiIvPjxwYXRoIGZpbGw9IiMwNjA4M0EiIGQ9Ik0yNTYgNzY4aDI1NnYyNTZIMjU2eiIvPjxwYXRoIGZpbGw9IiMwNDA1MkEiIGQ9Ik01MTIgNzY4aDI1NnYyNTZINTEyeiIvPjxwYXRoIGZpbGw9IiMwMTA2MjgiIGQ9Ik03NjggNzY4aDI1NnYyNTZINzY4eiIvPjxwYXRoIGZpbGw9IiMwNDA1MkEiIGQ9Ik0xMDI0IDc2OGgyNTZ2MjU2aC0yNTZ6Ii8+PHBhdGggZmlsbD0iIzA0MDQxRSIgZD0iTTEyODAgNzY4aDI1NnYyNTZoLTI1NnoiLz48L2c+PC9zdmc+)"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
