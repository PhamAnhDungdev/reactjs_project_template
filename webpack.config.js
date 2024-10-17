const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

require("dotenv").config({ path: "./.env" });

module.exports = {
  entry: ["./src/App/index.tsx"],
  output: {
    filename: "bundle.js",
    sourceMapFilename: "[file].map",
    path: path.join(__dirname, "build"), // Thư mục chứa file được build ra
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: ["/node_modules/"],
        use: ["babel-loader"],
      },
      {
        test: /\.ts(x?)$/, // Sẽ sử dụng ts-loader cho những file .ts(x)
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["ts-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"], // Sử dụng cho file .css .scss
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|ico)(\?[a-z0-9=.]+)?$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@scss": path.resolve(__dirname, "./src/scss"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  devServer: {
    compress: true,
    port: process.env.PORT,
    open: true,
    historyApiFallback: true,
  },
};
