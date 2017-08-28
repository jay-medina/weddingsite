const path = require('path');
const { forProduction, getPlugins } = require('./buildFiles/plugins');

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
  plugins: getPlugins()
};
