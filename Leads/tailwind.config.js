/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      'black-text': '#252433',
      'cyan-button': '#198CFF'
    },
  },
  plugins: 
  [('@tailwindcss/forms')
  ],
 
},
}
