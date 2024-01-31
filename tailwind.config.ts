import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "bg": "var(--bg-primary)",
        "bg-content": "var(--bg-secondary)",
        "text": "var(--text-primary)",
        "text-content": "var(--text-secondary)",
        "border": "var(--border)",
      }
    },
  },
  plugins: [],
};
export default config;