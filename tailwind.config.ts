import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  darkMode: [
    "class"
  ],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem"
      },
      screens: {
        "2xl": "1400px"
      }
    },

    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        searchmind: {
          blue: "#2563EB",
          purple: "#7C3AED",
          cyan: "#06B6D4",
          dark: "#0F172A"
        }
      },

      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "monospace"
        ]
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        premium:
          "0 20px 50px rgba(37,99,235,0.15)"
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-soft": "pulseSoft 2s infinite"
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },

        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },

        pulseSoft: {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.6"
          }
        }
      }
    }
  },

  plugins: [
    require("@tailwindcss/typography")
  ]
};

export default tailwindConfig;
