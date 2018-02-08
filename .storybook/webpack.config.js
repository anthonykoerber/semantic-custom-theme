// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const paths = require('../config/paths');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  resolve: {
    alias: {
      '../../theme.config$': path.join(
        paths.appSrc,
        'my-semantic-theme/theme.config'
      )
    }
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
          },
          {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              use: [
                require.resolve('css-loader'),
                require.resolve('less-loader')
              ]
            })
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true
            }
          },
          {
            test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
            use: 'file-loader?name=[name].[ext]?[hash]'
          }
        ]
      }
    ]
  }
};
