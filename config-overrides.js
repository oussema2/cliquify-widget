const { override } = require("customize-cra");

module.exports = override((config) => {
  if (config.output) {
    console.log("=================================+> entereed");
    // Set a fixed filename for the main JS file
    config.output.filename = "static/js/my-widget.js";
    config.output.chunkFilename = "static/js/my-widget.[name].js";
    config.output.pathinfo = false;
    config.output.globalObject = "this";
  }
  return config;
});
