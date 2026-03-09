/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        'bistre': "#3d211a",
        'coffee': "#6f4d38",
        'chamoisee': "#a07856",
        'khaki': "#cbb799",
        'beige': "#f5f5dc",
        'susu': "#f2e0d2",
        // "yellow": "#ffc82c",
        // "gray-dark": "#273444",
        // "gray": "#8492a6",
        // "gray-light": "#d3dce6",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

