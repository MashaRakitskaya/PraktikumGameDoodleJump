const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  name: "ssr",
  mode: "development",
  target: "node",
  entry: "./src/index.tsx",
  output: {
    filename: "ssrClient.js",
    path: path.join(__dirname, "../build"),
    libraryTarget: "commonjs2",
  },
  //externalsPresets: { node: true },
  //externals: [webpackNodeExternals()],  запрещают вэбпаку лезть в нодмодули и компилировать их
  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],
  //  resolve: { modules: ["src", "node_modules"] }, искать в папках этих
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "file-loader"],
      },
    ],
  },
};
