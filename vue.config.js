const personPreifx = process.env.npm_config_argv && JSON.parse(process.env.npm_config_argv).original[1]
const commonApiConfig = require('./src/config/webpack')
const origin = personPreifx ? commonApiConfig.backend.replace('m', `${personPreifx}.person`) : commonApiConfig.backend
console.log('origin', origin)
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
        target: origin,
      }
    }
  }
}
