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
});
