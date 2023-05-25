/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bgDark': '#191425',
        'textGradient1': '#f492f0',
        'textGradient2': '#f9c58d'
       
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
    },  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}; 