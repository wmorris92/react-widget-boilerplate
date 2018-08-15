const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

const defaultConfig = {
  mode: 'production',
  plugins: [
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

module.exports = [{
  ...defaultConfig,
  entry: './src/outputs/react-widget.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'widget.js',
    library: 'ReactWidget',
    libraryExport: 'default',
    libraryTarget: 'window',
  },
}];
