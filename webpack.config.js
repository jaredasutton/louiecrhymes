const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './client/public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: '10'
                }
              }
            ],
            '@babel/preset-react'
          ]
        }
      }
    ]
  },
  plugins: [new Dotenv()]
};
