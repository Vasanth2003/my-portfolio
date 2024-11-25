/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    container:{
      center:true,
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    space:{
      '1':'100px',
      '2':'200px',
      '3':'100px',
      '4':'20px',
      '5':'500px',
      '6':'600px',

    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    margin:{
      '2':'20px',
      '3':'30px',
    },
    
    extend: {
      fontFamily: {
        doto: ['Doto', 'sans-serif'],
        oswald:['Oswald', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        signatute:["Qwitcher Grypen", "cursive"]

      },
      animation: {
        rotate: 'rotate 5s linear infinite', // Adjust the duration, timing, and iteration
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        
      },
  
      

    },
    
  },
  plugins: [],
}

