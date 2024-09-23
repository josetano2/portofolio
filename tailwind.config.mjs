/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      lexend: ["Lexend", "open-sans"],
      backgroundSize: {
        "custom-size": "60px 60px", 
      },
      backgroundImage: {
        "custom-grid": `radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px)`,
      },
    },
  },
  plugins: [],
};
