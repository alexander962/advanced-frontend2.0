// функция, которая возвращает список плагинов
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      // указываем файл шаблон
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ]
}