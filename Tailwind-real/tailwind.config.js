/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
   extend:{
     height:{
       'boxSize': '500px',
       'screenHeight': '180vh',
       'screenHeightLarge': '280vh',
       

     },
     width:{
      'responsiveBoxWidth': '540px'
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
          mega: '1500px'
        },
      
  },

  plugins: [],
}

