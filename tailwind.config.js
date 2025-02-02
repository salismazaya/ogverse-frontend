/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        sans: ['DM Sans', 'serif'],  // Adding 'Poppins' as a sans-serif font
        // fancy: ['"MyCustomFont"', 'cursive'], // Adding custom local font
      },
      colors: {
        primary: "#080C12",
        secondary: "#0B266A",
        accent: "#1756EF",
      
        light_100: "#cecefb",
        light_200: "#a8b5db",
      
        gray_100: "#9ca4ab",
        dark_100: "#0f0d23",
      
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      backgroundImage: theme => ({
        'wrap-card_referral': "url('/src/assets/card_referalcode.png')",
      })
    },
  },
  plugins: [
  ],
}

