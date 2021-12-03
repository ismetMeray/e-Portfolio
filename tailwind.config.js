const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'dark-blue': {
            '50': '#f3f3fd', 
            '100': '#e8e7fa', 
            '200': '#c5c2f3', 
            '300': '#a29deb', 
            '400': '#5d54dc', 
            '500': '#170acd', 
            '600': '#1509b9', 
            '700': '#11089a', 
            '800': '#0e067b', 
            '900': '#0b0564'
        }
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
