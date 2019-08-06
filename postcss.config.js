module.exports = {
  plugins: {
    autoprefixer: {},
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 32,
      propList: ['*']
    }
  }
}
