const vueEnverywere = require('vue-enverywhere');

module.exports = {
  publicPath: "./",

  pwa: {
    name: 'Touchless Catalog',
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#42b983"
    }
  },

  configureWebpack: {
    plugins: [
      new vueEnverywere({ filename: "env-vars.js" })
    ],
  },
};