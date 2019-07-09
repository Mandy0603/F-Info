const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/web/v2", {
      target: "https://financialmodelingprep.com",
      changeOrigin: true
    })
  );
};
