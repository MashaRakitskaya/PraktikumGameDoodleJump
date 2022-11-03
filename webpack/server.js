const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  entry: './server/index.ts',
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '../build'),
    libraryTarget: 'commonjs2'
  },
  //  externalsPresets: { node: true },
  //externals: [webpackNodeExternals()],  запрещают вэбпаку лезть в нодмодули и компилировать их
  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],
  //  resolve: { modules: ["server", "node_modules"] }, искать в папках этих
  resolve: {
    modules: ['server', 'node_modules'],
    extensions: ['.ts', '.tsx'],
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
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'public' }]
    })
  ]
};
