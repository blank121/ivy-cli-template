let fs = require('fs')
let env = process.env

fs.writeFileSync('src/config/env.ts',
  `export default {env: '${env.NODE_ENV}', desc: '${env.DESC.replace(/'/g, '')}', app_name: '${process.cwd().split('/').slice(-1)[0]}'}
`,
  {encoding: 'utf8'},
)
fs.writeFileSync('src/config/env-webpack.js',
  `module.exports = '${env.NODE_ENV}'
`,
  {encoding: 'utf8'},
)
