const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public"
  },
  publicRuntimeConfig: {
    defaultCardsCount: 5,
    restTimeAfterWin: 3,
    cardsByRowCount: 5,
    allCardReveal: 5
  }
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(jpg|png|svg)$/,
  //     use: {
  //       loader: "url-loader",
  //       options: {
  //         limit: 25000
  //       }
  //     }
  //   });
  //   return config;
  // }
});
