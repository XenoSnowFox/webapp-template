//webpack.config.js
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const ENTRIES = {
  main: "./src/main/typescript/pages/index.ts",
  error: "./src/main/typescript/page-not-found.ts",
};

const DEFAULT_META = {
  charset: { charset:"utf-8" },
  "http-equiv": { "http-equiv":"X-UA-Compatible", content:"IE=edge" },
  robots: { name:"robots", content: "noindex"},
  viewport: { name:"viewport", content: "width=device-width,initial-scale=1"},
};

const PLUGINS = [
  new HtmlWebpackPlugin({
    title: "WebApp Index Page",
    chunks: ["main"],
    minify: true,
    meta: { ...DEFAULT_META },
  }),
  new HtmlWebpackPlugin({
    title: "WebApp Error Page",
    chunks: ["error"],
    minify: true,
    filename: "error.html",
    meta: { ...DEFAULT_META },
  }),

];

// Set up Webpack Configuration object
const config: webpack.Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ENTRIES,
  output: {
    path: path.resolve(__dirname, './build'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
  plugins: PLUGINS
};

export default config;