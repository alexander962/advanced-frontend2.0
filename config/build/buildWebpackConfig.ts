import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options;

  return {
    mode: mode,
    // стартовая точка приложения
    entry: paths.entry,
    // настраиваем куда и как будем делать сборку приложения
    output: {
      // [contenthash] - при изменении файла название будет меняться
      filename: "[name].[contenthash].js",
      // указываем куда будем делать сборку
      path: paths.build,
      // подчищаем файлы
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}