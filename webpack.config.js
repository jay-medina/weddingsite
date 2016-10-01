const path = require('path');
const plugins = require('./buildFiles/plugins.js');

const PATHS = {
  app: path.join(__dirname, 'app/index.tsx'),
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
    extensions: ['','.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
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
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
  },
  plugins: plugins.getPlugins()
};
