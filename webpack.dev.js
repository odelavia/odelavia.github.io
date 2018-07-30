const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./build-utils/webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              // sourceMap: true,
              singleton: true
            }
          },
          {loader: 'sass-loader'}
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // historyApiFallback: true,
    contentBase: './src',
    hot: true,
  },
});
