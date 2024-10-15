/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,jsx,tsx,html,js}"],
  theme: {
    extend: {
      colors: {
        'secondary': '#16365C',
        'primary': '#1F4A7A',
        'gold': '#D1D1D1'
      },
      spacing: {
        '18': '4.7rem',
        '84': '22rem'
      },

      borderRadius: {
        '4xl': '1.8rem'
      },

      rotate: {
        '18': '18deg'
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

    },

    container: {
      padding: "1rem",
      center: true,
    }

  },
  plugins: [],
}

