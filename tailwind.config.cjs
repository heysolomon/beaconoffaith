/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
    colors: {
      brand: "#001D4A",
      brand2: "#27476E",
      brand3: "#ECA400",
      brand4: "#EAF8BF",
      brand5: "#006992",
      brand6: "#145880",
      brand7: "#D9D9D9",
    },
    backgroundImage: {
      header: "url('./src/assets/4.jpg')",
    },
    gradientColorStops: {
      first: "#EAF8BF",
      second: "#fff",
    },
  },
  plugins: [],
};
