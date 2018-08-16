const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const config = {
  mode: isProd ? 'production' : 'none',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
    new CleanWebpackPlugin(['build/']),
    new JavaScriptObfuscator(),
  ].filter(i => i),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};

if (!isProd) {
  config.devServer = {
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'build')],
    open: true,
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
  );
}

module.exports = [{
  ...config,
  entry: './src/react-widget.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'widget.js',
    library: 'ReactWidget',
    libraryExport: 'default',
    libraryTarget: 'window',
  },
}];
