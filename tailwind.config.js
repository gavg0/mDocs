/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
    extend: {
      colors: {
        'bgblack': '#0E0A10',
        'primaryButton': '#9068F3',
        'secondaryButton': '#F9C58D',
        'textGradient1': '#f492f0',
        'textGradient2': '#f9c58d',
        'textGradient3': '#ff5858',
        'textGradient4': '#471069',
        'textGradient5': '#d8ded6',
        'textGradient6': '#e8bdf9'
       
            },
      fontFamily: {
        'Roboto' : ['Roboto', 'sans-serif'],
        'Poppins' : ['Poppins', 'sans-serif'],
        'Montserrat' : ['Montserrat', 'sans-serif'],
        'Alata' : ['Alata', 'sans-serif'],
        'jetbrains' : ['JetBrains Mono', 'monospace'],
        'Sora'  : ['Sora', 'sans-serif'],
        'Jost' : ['Jost', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      blur: {
        '5xl': '70px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      width: {
        '192': '48rem ',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/10': '70%',
        '9/10': '90%',
      },
      height: {
        '192': '48rem ',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/10': '70%',
        '9/10': '90%',
      },
    /*Scrollanimation Beginnig */
      variants: {
        animation: ["motion-safe"]
    },
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    },
    /*Scrollanimation Ending */
  
    },  },
  plugins: [
    require('@tailwindcss/typography'),
    
  ],
}; 