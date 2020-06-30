let Env = require('./env-webpack')
let conf = require('@ivy/fts/configWebpack').getWebpackConfig(Env)
module.exports = {
  ...conf,
  // 其他自定义的配置
}
