const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/buy_subscription',
    createProxyMiddleware({
      target: 'https://vm-c6638fea.na4u.ru',
      changeOrigin: true,
    })
  );
};
