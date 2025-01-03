/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000FF", // Azul del logo
        accent: "#FFA500", // Naranja del logo
        background: "#FFFFFF", // Blanco
        secondary: "#F4F4F4", // Gris claro
        text: "#333333", // Negro suave
      },
    },
  },
  plugins: [],
};


