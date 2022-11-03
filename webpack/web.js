const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  name: 'web',
  mode: 'development',
  target: 'web',
  entry: './src/index.tsx',
  //library: "ClientWebpack"  означает что мы сможем обратится к собранному файлу
  //"./src/index.tsx" --> "browserClient.js" как объекту и вызвать его функции
  output: {
    filename: 'browserClient.js',
    path: path.join(__dirname, '../build/public'),
    libraryTarget: 'var',
    library: 'ClientWebpack'
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
      }
    ]
  }
};
