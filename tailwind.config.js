/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#111827",
        btext: "#4B5563",
        vib: "#0EA5E9",
        brdc: "#E5E7EB",
        def: "#FFFFFF",
        gray: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
