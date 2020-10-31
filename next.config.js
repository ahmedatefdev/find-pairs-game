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
  }
});
