/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
   extend:{

   height:{
    boxRandom: "1200px"

   },

     colors: {
 
       whitePrimary: 'rgba(255, 255, 255, 0.862)',
       grayWhite: 'rgb(245,245,245)',
       darkerGray: '#313131'
 
     },
     fontSize:{
      5: "4rem"
     }

   },
    
     screens: {
          sm: '480px',
          md: '768px',
          lg: '1050px',
          xl: '1440px',
          ml: '1670px'
        },
      
  },

  plugins: [],
}

