const { override } = require("customize-cra");

module.exports = override((config) => {
  if (config.output) {
    // Set a fixed filename for the main JS file
    config.output.filename = "static/js/my-widget.js";
    config.output.chunkFilename = "static/js/[name].chunk.js";
  }
  return config;
});
