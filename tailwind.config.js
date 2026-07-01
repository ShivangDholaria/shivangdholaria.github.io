/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // dark base
        ink: "#0c0c0e",
        surface: "#141418",
        fg: "#ededed",
        muted: "#9a9aa7",
        faint: "#c9c8d1",
        accent: "#7c5cff",
        "accent-2": "#a78bfa",
        // light bands (impact / contact)
        paper: "#f6f5f2",
        "paper-ink": "#16151a",
        "paper-muted": "#6e6c78",
        "paper-accent": "#6a46e8",
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 12px 40px -18px rgba(0, 0, 0, 0.75)",
        "accent-glow": "0 16px 48px -20px rgba(124, 92, 255, 0.5)",
        cta: "0 16px 40px -18px rgba(124, 92, 255, 0.7)",
      },
      screens: { xs: "450px" },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        "ping-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "75%,100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "ping-ring": "ping-ring 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
