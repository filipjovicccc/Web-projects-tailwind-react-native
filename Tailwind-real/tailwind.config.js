/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
   extend:{

   height:{
    100: '100vh',
    200: '200vh',
    300: '300vh',
    400: '400vh',
    500: '500vh',
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
          xl: '1440px'
        },
      
  },

  plugins: [],
}

