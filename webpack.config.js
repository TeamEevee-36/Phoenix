require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: 'index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    // mode: process.env.NODE_ENV,
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      hot: true,
      static: {
        directory: path.join(__dirname, './build'),
        publicPath: '/',
      },
      proxy: {
        // ''
      },
      compress: true,
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.png|svg|jpg|gif$/,
          exclude: /node_modules/,
          use: ['file-loader'],
        },
        // {
        //   test: /\.(ts|tsx)$/,
        //   exclude: /node_modules/,
        //   use: ['ts-loader'],
        // },
      ],
    },
    resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/client/index.html' }),
      new MiniCssExtractPlugin(),
    ],
  };
  
  module.exports = config;
  