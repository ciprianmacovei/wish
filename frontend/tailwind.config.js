/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        label: {
          "to": {
            fontSize: "14px",
            transform: "translate(0, 0)"
          },
          "from": {
            fontSize: "18px",
            transform: "translate(0, 20px)"
          }
        }
      },
      animation: {
        label: 'label 0.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
