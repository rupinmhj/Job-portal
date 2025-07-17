/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        oregano: ['Oregano', 'cursive'],
        urbanist:['Urbanist']
      },
      colors:{
        custGrey:"#12192799",
        custBlackBold:"#121927",
        textSearch:"rgb(18, 25, 39)",
        backGreen:"rgb(0, 204, 154)",
        buttonGreen:"#089175",
        sliderBlue:"#7c66ff",
        sliderPurple:"#A55FFF",
        softWhite:"rgba(255, 255, 255, 0.6)",
        buttonBlue:"#5042A1",
        buttonPurple:"#7847BA",
        textSeeAll:"rgba(18, 25, 39, 0.6)",
        bgColor:"#f7f7f8",
        bgLogo:"#7c66ff",
        google:"#71757D",
        "primary-text":"#121927",
        borderBlue:"#245EE4"
        

      },
     
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        circle: {
          '0%': { transform: 'scale(0.4)', opacity: '0.5' },
          '50%': { opacity: '0.1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        circle: 'circle 1.2s infinite ease-in-out',
        'slide-in': 'slideIn 4s ',
        'spin-slow': 'spin 5s linear infinite',
      },

    },
  },
  plugins: [],
}