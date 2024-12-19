/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        custom: "27.2deg", // custom degree rotation
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgb(2,194,125),transparent)",
      },

      gradientColorStops: {
        "gradient-start": "#ff00ff", // Replace with your start color
        "gradient-end": "#00ffff", // Replace with your end color
      },
      backgroundGradientColors: ["gradient-start", "gradient-end"],
    },
  },
  plugins: [],
};
