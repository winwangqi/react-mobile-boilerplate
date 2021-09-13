const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://39.102.42.191:8900/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  )
}
