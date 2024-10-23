const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  // стартовая точка приложения
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // настраиваем куда и как будем делать сборку приложения
  output: {
    // [contenthash] - при изменении файла название будет меняться
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    // подчищаем файлы
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      // указываем файл шаблон
      template: path.resolve(__dirname, 'public', "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ]
}