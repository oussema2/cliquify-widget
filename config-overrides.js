const { override } = require("customize-cra");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = override((config) => {
  if (config.output) {
    // Set a fixed filename for the main JS file
    config.output.filename = "static/js/my-widget.js";
    config.output.chunkFilename = "static/js/my-widget.[name].js";
    config.output.pathinfo = false;
    config.output.globalObject = "this";
  }
  config.plugins = config.plugins.map((plugin) => {
    if (plugin instanceof MiniCssExtractPlugin) {
      return new MiniCssExtractPlugin({
        filename: "static/css/my-widget.css", // Set fixed filename for main CSS
        chunkFilename: "static/css/my-widget.[name].css",
      });
    }
    return plugin;
  });
  return config;
});
