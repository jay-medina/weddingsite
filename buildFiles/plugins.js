const webpack = require('webpack');
const htmlPages = require('./htmlPages');

function forProduction() {
  const argv = process.argv;
  return argv.length > 2 && argv[2] === '--env=production';
}

function getPlugins() {

  if (forProduction()) {
    return [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ].concat(htmlPages);
  }

  return htmlPages;
}

module.exports = {
  getPlugins,
  forProduction,
};
