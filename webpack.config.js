const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js' //分开第三方模块 所以要给入口文件单独命名
  },
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: 'js/[name].js' //以key做为输出的名字
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: 1717
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif)/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 5000,
          outputPath: 'images/'
        }
      }]
    }]
  },
  plugins: [
    new htmlPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "jquery",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  }
}