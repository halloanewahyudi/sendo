/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brand':{
          1:'#0F1C3D',
          2:'#7EFCF7',
          3:'#F29305',
          4:'#FDF8F1',
          5:'#1F1C1C',
          6:'#ebf6f9',
          7:'#FFEDE3',
          8:'#E5F8F6',
          9:'#E4E4F8'
        },
      },
      fontFamily:{
        'montserrat':['Montserrat']
        // 'cusa':['Montserrat','Inter']
      }
    },
  },
  plugins: [],
}
