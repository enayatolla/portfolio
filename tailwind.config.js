/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
   content: [
      "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
      colors: {
         ...colors,
         primary: colors.purple,
         secondary: colors.pink,
         // Replace old names with new ones
         // sky: colors.sky, // was lightBlue
         // stone: colors.stone, // was warmGray
         // neutral: colors.neutral, // was trueGray
         // gray: colors.gray, // was coolGray
         // slate: colors.slate, // was blueGray
      },
   },
   plugins: [],
};
