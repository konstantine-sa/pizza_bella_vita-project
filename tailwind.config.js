/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7D22D",
        main: "#0E0C0D",
        mainGray: "#696F7A",
        secondaryTitle: "#797979",
        secondaryText: "#686466",
        buttonHoverDark: "#473E43",
        buttonLightGray: "#F3F3F7",
      },
    },
  },
  plugins: [],
};
