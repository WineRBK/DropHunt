const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // Порт, на котором запущен NestJS
      changeOrigin: true,
    })
  );
};