module.exports = {
  baseUrl: '/' + process.cwd().split('/').slice(-1)[0],
  chainWebpack: config => {
    config.externals({
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'mint-ui': 'MINT',
      axios: 'axios',
    })
  },
  devServer: {
    proxy: {
      "/api": {
        target: require('./src/config/webpack').backend,
      }
    }
  }
}
