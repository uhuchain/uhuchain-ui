var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  UHUCHAIN_API_URL: '"http://localhost:3333/v1"'
})
