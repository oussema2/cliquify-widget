module.exports = function override(config, env) {
  return {
    ...config,
    output: {
      filename: "static/js/my-widget.js",
      chunkFilename: "static/js/my-widget.[name].js",
      path: "D:\\Work\\react-demos\\embeddable-widget\\my-embeddable-widget\\build",
      pathinfo: false,
      futureEmitAssets: true,
      publicPath: "/",
      jsonpFunction: "webpackJsonpmy-embeddable-widget",
      globalObject: "this",
    },
  };
};
