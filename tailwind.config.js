/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#460a6a',
      },
      backgroundImage: {
        'custom-image': "url('src/assets/th (1).jpeg')",
        
      },
    },
  },
  plugins: [],
}

