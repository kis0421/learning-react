const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    open: true,
    host: "localhost",
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          name: '[path][name].[hash].[ext]',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}