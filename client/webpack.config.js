const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, './public/'),
    filename: 'bundle.js',
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      // {
      //   test: /\.(png|jp(e*)g|svg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'images/[hash]-[name].[ext]',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      url: require.resolve("url/")
    },
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      stream: "stream-browserify",
      zlib: "browserify-zlib"
    }
  },
}
