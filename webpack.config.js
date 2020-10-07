const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          // 3. Inject sytes into DOM
          "style-loader",
          // 2. Turns css into commonjs
          "css-loader",
          // 1. Turns sass into css "sass-loader",
        ],
      },
    ],
  },
};
