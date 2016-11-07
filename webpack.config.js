const path = require('path');
const plugins = require('./buildFiles/plugins.js');

function forProduction() {
  const argv = process.argv;
  return argv.length > 2 && argv[2] === '--production';
}

module.exports = {
  entry: {
    index: './app/index.tsx',
    registry: './app/registry.tsx',
    ourtravels: './app/ourtravels.tsx',
    hotelinformation: './app/hotelinformation.tsx'
  },
  output: {
    path: 'dist/',
    publicPath: (forProduction()) ? 'http://mjfiesta2forever.com/': '',
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
          loader: 'file?name=./images/[name].[ext]'
        }
      ]
  },
  plugins: plugins.getPlugins()
};
