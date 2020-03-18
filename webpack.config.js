const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  devServer: {
    host: '0.0.0.0',
},
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },

  entry: "./app/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: "production",
  plugins: [
    new HTMLWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
