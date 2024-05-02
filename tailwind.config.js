module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mad1: { min: "1280px", max: "1366px" },
        mad2: { min: "1366px", max: "1440px" },
        mad3: { min: "1430px", max: "1600px" },
        mad4: { min: "1600px", max: "1920px" },
        mad5: { min: "1920px", max: "3000px" },
        mad6: { min: "1024px", max: "1279px" },
      },
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
