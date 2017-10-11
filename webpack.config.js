const path = require('path')

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'public'), // where you wanna output the webpack file
    filename: 'bundle.js' // common filename for webpack
  },
  module: {
    rules: [{
      loader: 'babel-loader', // use babeö
      test: /\.jsx$/, // look for all *.jsx files
      exclude: /node_modules/,
    }]
  }
};
