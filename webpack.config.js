const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        loader: 'ts-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '.serverless'),
          path.resolve(__dirname, '.webpack'),
        ],
      },
    ],
  },
};
