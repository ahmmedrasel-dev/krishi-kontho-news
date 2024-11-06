/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "640px",
      desktop: "768px",
      lg_desktop: "1024px",
      xl_desktop: "1280px",
    },

    extend: {
      container: {
        center: true,
      },
      colors: {
        "navlink-color": "#202124",
        "title-color": "#121212",
        "summary-color": "#555555",
      },
      fontFamily: {
        solaiman: ["solaiman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
