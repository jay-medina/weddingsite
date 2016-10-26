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

  return [
    new HtmlWebpackPlugin({
      title: 'M&amp;JFiesta2Forever',
      filename: 'index.html',
      chunks: ['index'],
      template: 'buildFiles/template.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'M&amp;JFiesta2Forever',
      filename: 'whenandwhere/index.html',
      chunks: ['whenAndWhere'],
      template: 'buildFiles/template.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'M&amp;JFiesta2Forever',
      filename: 'registry/index.html',
      chunks: ['registry'],
      template: 'buildFiles/template.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'M&amp;JFiesta2Forever',
      filename: 'rsvp/index.html',
      chunks: ['rsvp'],
      template: 'buildFiles/template.ejs'
    })
  ];
}

module.exports = {
  getPlugins: getPlugins
};