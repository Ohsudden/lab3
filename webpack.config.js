const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Імпорт HtmlWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',  
  stats: {
    children: true, 
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, 'src/pages/assets/images'),
              to: path.resolve(__dirname, 'dist/assets/images')
          }
      ]
  }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'), 
    port: 8080, 
    open: true, 
    hot: true, 
    compress: true, 
  },
};
