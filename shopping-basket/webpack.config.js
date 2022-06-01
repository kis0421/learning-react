const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    host: "localhost",
    port: 3000,
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: ["ts-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}