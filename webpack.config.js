const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsPlugin = require('favicons-webpack-plugin')

module.exports = (env, argv) => {
  const devServerPort = '9000';
  let outputPublicPath = 'dist/';
  let htmlPluginPrefix = '../';
  if (env && env.mode === 'server') {
    htmlPluginPrefix = '';
    outputPublicPath = `http://localhost:${devServerPort}/`
  }

  // Webpack configuration
  let config = {
    entry: {
      index: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.[hash].js',
      publicPath: outputPublicPath
    },
    devServer: {
      port: devServerPort,
      compress: true
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        // new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            }
          }
        },
        {
          test: /\.(jpg|png|woff|eot|ttf|svg|ico)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: (absoluteUrl) => {
                const urlSplit = absoluteUrl.split('/');
                return `${urlSplit[urlSplit.length-2]}/[name].[hash].[ext]`;

              }
            }
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'css/[name].[hash].css'
      }),
      new HtmlPlugin({
        filename: `${htmlPluginPrefix}index.html`,
        template: 'src/index.html',
        hash: true,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      }),
      new FaviconsPlugin({
        logo: './src/icons/favicons/favicon.jpg',
        prefix: 'icons/favicons-[hash]/',
        emitStats: false,
        persistentCache: true,
        inject: true,
        background: '#1f2d57',
        icons: {
          android: true,
          favicons: true,
          appleIcon: true,
          opengraph: true,
          appleStartup: false,
          coast: false,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    ]
  };

  return config
}