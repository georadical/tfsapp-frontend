/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#3951a3",    // Azul principal
          light: "#4B6BC7",      // Azul claro para hover
          dark: "#1E3578"        // Azul oscuro para énfasis
        },
        accent: {
          DEFAULT: "#ec9930",    // Naranja principal
          light: "#F7B05B"       // Naranja suave
        },
        gray: {
          dark: "#2A3B4D",       // Gris azulado para texto
          light: "#F5F7FA"       // Gris claro para fondos
        },
        white: "#FFFFFF"         // Blanco
      },
    },
  },
  plugins: [],
};
