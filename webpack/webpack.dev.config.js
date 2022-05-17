const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackEnvironment = require('./webpack.environment');
const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {
  mode: 'development',

  /* Manage source maps generation process */
  devtool: 'source-map',

  /* Development Server Configuration */
  devServer: {
    open: true,
    historyApiFallback: true,
    compress: true,
    hot: false,
    static: {
      watch: true,
      directory: webpackEnvironment.paths.docs,
    },
    devMiddleware: {
      publicPath: '/',
    },
    client: {
      overlay: true,
    },
    ...webpackEnvironment.server,
  },

  /* File watcher options */
  watchOptions: {
    aggregateTimeout: 300,
    poll: 300,
    ignored: /node_modules/,
  },

  /* Additional plugins configuration */
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});
