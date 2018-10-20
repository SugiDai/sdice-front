'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PROTOCOL:'"http://"',
  API_END_POINT: '"http://localhost:8000/api"',
  API_SITE_ENDPOINT: '"http://localhost:8000/api/site"',
  SITE_SITE_DETAIL: '"http://localhost:8000/api/sitedetaile/"',
  FILE_ENDPOINT: '"http://localhost:8000"',
})