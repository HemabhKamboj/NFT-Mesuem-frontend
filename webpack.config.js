const HtmlPlugin = require('html-webpack-plugin');

const { resolve } = require('path');

const context = resolve(__dirname, 'src');

module.exports = {
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
        },
      },

      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    fallback: {
      "os": false,
      "https": false,
      "http": false,
      "crypto": false,
      "stream": false,
      "assert": false,
      "stream-browserify": false
    }
  },

  plugins: [
    new HtmlPlugin({
      title: 'NFT Museum',
      favicon: './src/assets/favicon.svg',
    }),
  ],
};
