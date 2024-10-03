/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      lexend: ["Lexend", "open-sans"],
      backgroundSize: {
        "custom-size": "70px 70px",
      },
      backgroundImage: {
        "custom-grid":
          "`radial-gradient(circle, rgba(0, 0, 0, 0.25) 1px, rgba(0, 0, 0, 0) 1px)`",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
