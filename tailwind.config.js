module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './apps/**/src/**/*.html',
      './apps/**/src/**/**/*.html',
      './apps/**/src/**/*.scss',
      './apps/**/src/**/**/*.scss',
      './apps/**/src/**/*.ts',
      './apps/**/src/**/**/*.ts',
      './libs/**/src/**/**/*.ts',
      './libs/src/**/**/*.ts',
      './libs/**/src/**/**/*.html',
      './libs/src/**/**/*.html',
      './libs/**/src/**/**/*.scss',
      './libs/src/**/**/*.scss'
    ]
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'black': '#303030',
        'white': '#FAFAFA',
        'primary-green': '#83C142',
        'primary-blue': '#00A6F4',
        'background-gray': '#F8F8F8',
        'primary-yellow': '#F5A623'
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
