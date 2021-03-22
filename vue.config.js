const vueEnverywere = require("vue-enverywhere");

module.exports = {
  publicPath: "./",

  pwa: {
    name: "Touchless Catalog",
    themeColor: "#FFFFFF",
    msTileColor: "#FFFFFF",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#FFFFFF"
    }
  },

  configureWebpack: {
    plugins: [new vueEnverywere({ filename: "env-vars.js" })]
  }
};
