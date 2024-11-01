const { override } = require("customize-cra");

module.exports = override((config) => {
  return {
    ...config,
    filename: "static/js/my-widget.js",
    chunkFilename: "static/js/my-widget.[name].js",
    pathinfo: false,
    globalObject: "this",
    publicPath: "/",
  };
});
