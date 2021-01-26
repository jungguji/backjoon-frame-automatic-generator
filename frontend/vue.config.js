const path = require("path");

module.exports = {
  assetsDir: "static",
  outputDir: path.resolve(__dirname, "../src/main/resources/static"),
  devServer: {
    proxy: {
      "/": {
        target: "https://backjoonframeautomaticgenerat.herokuapp.com/",
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
