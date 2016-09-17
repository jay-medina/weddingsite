const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function forProduction() {
  const argv = process.argv;
  return argv.length > 2 && argv[2] === '--production';
}

function getPlugins() {

  if(forProduction()){
    return [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['vendor']
      })
    ];
  }

  return [new HtmlWebpackPlugin({
    title: 'M&JTogetherForever',
    template: 'app/index.ejs'
  })];
}

module.exports = {
  getPlugins: getPlugins
};