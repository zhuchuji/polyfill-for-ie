const path = require('path');

module.exports = {
  mode: 'production',
  entry: { index: './src/index.ts' },
  target: ['web', 'es5'], // neccessary to intruct webpack the format of the generated runtime code. see https://webpack.js.org/configuration/target/#target
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};
