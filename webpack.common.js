const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
    }
},
  module: {
    
    rules: [
      {
        test: /\.js$|jsx/,
        //exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
};
