module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Google Clone --Vue instance'
        return args
      })
  }
}
