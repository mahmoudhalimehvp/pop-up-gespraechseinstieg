/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        surface: "#F9FAFB",
        ink: "#111827",
        muted: "#6B7280",
        border: "#E5E7EB",
        "info-bg": "#DBEAFE",
        "warning-soft": "#FEF3C7",
        "danger-soft": "#FEE2E2",
      },
      boxShadow: {
        modal: "0 25px 50px -12px rgb(0 0 0 / 0.15), 0 0 0 1px rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
};
