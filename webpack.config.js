const path = require('path');
const plugins = require('./buildFiles/plugins.js');

module.exports = {
  entry: {
    index: './app/index.tsx',
    registry: './app/registry.tsx',
    ourtravels: './app/ourtravels.tsx',
    hotelinformation: './app/hotelinformation.tsx'
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
        },
        {
          test: /\.(jpg|png)$/,
          loader: 'file?name=images/[name].[ext]'
        }
      ]
  },
  plugins: plugins.getPlugins()
};
