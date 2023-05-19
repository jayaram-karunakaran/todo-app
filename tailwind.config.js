/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-140': 'linear-gradient(140deg, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
}

