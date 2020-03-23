const path = require('path')
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// mode: 'production',
// devtool: 'hidden-source-map',
module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue']
  },
  entry: {
    app: path.join(__dirname, 'src/main.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader'],
      }]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist'
  }
}
