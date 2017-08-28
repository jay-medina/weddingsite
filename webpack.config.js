const path = require('path');
const plugins = require('./buildFiles/plugins');

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
    path: path.resolve(__dirname, 'dist'),
    publicPath: (forProduction()) ? 'http://mjfiesta2forever.com/' : '',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader?name=./images/[name].[ext]'
      }
    ]
  },
  plugins: plugins.getPlugins()
};
