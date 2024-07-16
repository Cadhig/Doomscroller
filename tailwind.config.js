/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: [{

        "doomBlue": "#4c68d7",
      }
      ]
    },
  },
  plugins: [],
}

