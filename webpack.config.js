const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  entry: {
    app: './src/app.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    //   {
    //   test: /\.tsx?$/,
    //   use: 'ts-loader',
    //   exclude: /node_modules/
    // },
    {
      test: /\.(gif|mp3)$/,
      use: [{
        loader: 'file-loader'
      }]
    },
    {
      test: /\.css$/,
      exclude: /\.component\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.component\.css$/,
      use: ['css-loader']
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript']
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Bricks - game for infants',
      filename: 'app.html',
      chunks: ['app']
    }),
    new CleanWebpackPlugin()
  ]
}