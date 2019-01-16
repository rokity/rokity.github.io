const path = require('path');

module.exports = {
  entry: './src/static/js/load-data.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};