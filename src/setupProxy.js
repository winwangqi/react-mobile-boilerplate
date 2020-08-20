const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    'xxx',
    proxy({
      target: 'xxx',
      changeOrigin: true,
      pathRewrite: {
        '^/xxx': '/'
      }
    })
  );

  app.use(
    'yyy',
    proxy({
      target: 'yyy',
      changeOrigin: true,
      pathRewrite: {
        '^/yyy': '/'
      }
    })
  );
}
