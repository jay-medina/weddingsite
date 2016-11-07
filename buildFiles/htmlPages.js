const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    title: 'M&amp;JFiesta2Forever',
    filename: 'index.html',
    chunks: ['index'],
    template: 'buildFiles/template.ejs'
  }),
  new HtmlWebpackPlugin({
    title: 'M&amp;JFiesta2Forever',
    filename: 'hotel/index.html',
    chunks: ['hotelinformation'],
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
    filename: 'ourtravels/index.html',
    chunks: ['ourtravels'],
    template: 'buildFiles/template.ejs'
  })
];