const withOffline = require("next-offline");

module.exports = withOffline({
  publicRuntimeConfig: {
    defaultCardsCount: 5,
    restTimeAfterWin: 3,
    cardsByRowCount: 10,
    allCardReveal: 5
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpg|png|svg)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 25000
        }
      }
    });
    return config;
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? "service-worker.js"
      : "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js"
      }
    ];
  }
});
