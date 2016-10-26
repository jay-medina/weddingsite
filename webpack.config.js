const path = require('path');
const plugins = require('./buildFiles/plugins.js');

module.exports = {
  entry: {
    index: './app/index.tsx',
    whenAndWhere: './app/when_and_where.tsx',
    registry: './app/registry.tsx',
    rsvp: './app/rsvp.tsx'
  },
  output: {
    path: 'dist/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['','.ts', '.tsx', '.js', '.jsx']
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
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
  },
  plugins: plugins.getPlugins()
};
