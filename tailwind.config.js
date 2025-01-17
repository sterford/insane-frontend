/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 15px 0px #8A2BE2B2',
      },
      colors: {
        'navbar-bg': '#000003',
        'custom-black-adventage':'#09090D',
        'custom-white-adventage':'#262626',
        'custom-back-popup-input':'#17171b',
        'main':'#8A2BE2',
        'titles-color':'#E8E4FF'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #8A2BE2 0%,rgb(13, 29, 139) 100%)',
        'custom-gradient-titles': 'radial-gradient(100% 100% at 50.43% 100%, rgba(212, 205, 255, 0.3) 0%, rgba(212, 205, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
}

