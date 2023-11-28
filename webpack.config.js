const path = require("path"); // node.js

module.exports = {
  // mode
  mode: "development", // production
  // entry
  entry: path.resolve(__dirname, "./src/app.js"),
  // output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  // plugins
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
