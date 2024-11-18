import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: "development",
  // стартовая точка приложения
  entry: path.resolve(__dirname, 'src', 'index.ts'),
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
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config;