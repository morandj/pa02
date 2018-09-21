var path = require('path');

module.exports = {
  // entry file - starting point for the app
  entry: './src/index.js',
  // where to dump the output of a production build
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.jsx?/i,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['transform-react-jsx', {
              pragma: 'h'
            }]
          ]
        }
      }
    }]

  },

  // enable Source Maps
  devtool: 'source-map',
  devServer: {
    // serve up any static files from src/
    contentBase: path.join(__dirname, 'src'),
    // enable gzip compression:
    compress: true,
    // enable pushState() routing, as used by preact-router et al:
    historyApiFallback: true
  }
};