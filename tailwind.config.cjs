const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.svelte'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Input Sans Reg', ...defaultTheme.fontFamily.sans],
        mono: ['Input Mono Reg', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        p1: {
          1: '#0c0b08ff',
          2: '#5e314cff',
          3: '#e5e5d7ff',
          4: '#baba96ff',
          5: '#575743ff'
        },
        p2: {
          1: '#fffcf2',
          2: '#ccc5b9',
          2: '#403d39',
          4: '#252422',
          5: '#eb5e28'
        },
        p3: {
          1: '#ECF0EE',
          2: '#CFD6DA',
          3: '#c4c4c0',
          4: '#868679',
          5: '#46544D',
          6: '#191D25',
          7: '#181C1F'
        }
      }
    }
  },
  plugins: []
}
