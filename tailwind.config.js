/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontSize:{
        '6xl':'45px',
        '4xl':'40px'
      },
      width: {
        '128': '350px',
        '130':'526px',
        '131':'409px',
        '132':'936px',
        '133':'676px',
        '134':'351px'
      },
      height: {
        '128': '500px',
        '129':'550px',
        '130':'440px'
        
      },
      margin:{
        '100':'307px',
        '101':'122px',
        '102':'506px',
        '103':'299px'
      },
      left:{
        '98': '64%',
      },
      padding:{
        '100':'166px',
        '101':'443px',
        '102': '145px',
      },
      container:{
          'xl': '1200px'
      }
    },
  },
  plugins: [require("daisyui")],
  container: {
    center: true,
  },
  screens: {
    sm: '630px',
    md: '768px',
    lg: '1200px',
  },
  
}
