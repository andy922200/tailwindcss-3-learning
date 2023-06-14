const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.css", "./js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }){
        addBase({
            h1: { fontSize: theme('fontSize.2xl') }
        })
    })
  ],
}

