const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const BASE_URL = 'https://doodlers-doodlejump-17.ya-praktikum.tech';

/** @type {import('webpack').Configuration} */
module.exports = {
  name: 'web',
  mode: 'development',
  target: 'web',
  entry: [
    `webpack-hot-middleware/client?path=${BASE_URL}/__webpack_hmr`,
    './src/index.tsx'
  ],
  //library: "ClientWebpack"  означает что мы сможем обратится к собранному файлу
  //"./src/index.tsx" --> "browserClient.js" как объекту и вызвать его функции
  output: {
    filename: 'browserClient.js',
    path: path.join(__dirname, '../build/public'),
    publicPath: '/',
    libraryTarget: 'var',
    library: 'ClientWebpack'
  },
  devServer: {
    hot: true
  },
  //  resolve: { modules: ["src", "node_modules"] }, искать в папках этих
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'file-loader']
      },
      {
        test: /\.(png|woff|woff2)(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({ overlay: false })
  ]
};
