const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public"
  },
  publicRuntimeConfig: {
    defaultCardsCount: 10,
    restTimeAfterWin: 3,
    cardsByRowCount: 5,
    allCardReveal: 5
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
