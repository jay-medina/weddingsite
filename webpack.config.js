const path = require('path');
const plugins = require('./buildFiles/plugins.js');

const PATHS = {
  app: path.join(__dirname, 'app/index.jsx'),
  build: 'dist/'
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: [
          {
            test: /\.css$/,
            loader: "style!css"
        },
        {
          test: /\.html$/,
          loader: 'html'
        },
        {
          test: /\.jsx?$/,
          loader: ['babel-loader'],
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
  },
  plugins: plugins.getPlugins()
};
