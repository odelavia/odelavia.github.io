const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // create index.html file based off template in src
const CleanWebpackPlugin = require('clean-webpack-plugin'); // deletes old dist folder for clean build

module.exports = {
  entry: { main: './client/src/index.js' },
  output: {
    path: path.join(__dirname, './client/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]',
                    // publicPath: 'src/assets/images/'
                },
            },
        ]
      },
    ],
  },
  devServer: {
      historyApiFallback: true,
      port: 8090
    },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './client/src/index.html',
      filename: 'index.html',
    }),
  ],
};
