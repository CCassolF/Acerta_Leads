/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'source-sans-3': '"Source Sans 3", sans-serif',
    },
  extend: {
    colors: {
      'black-text': '#252433',
      'cyan-button': '#198CFF',
      'gray-text':' #B9C2CB'
    },
  },
  plugins: 
  [('@tailwindcss/forms')
  ],
 
},
}
