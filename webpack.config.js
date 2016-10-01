var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var path = require('path');

module.exports = {
	entry: {
		app: './src/index.js'
	},

	output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
				exclude: /node_modules/,
        loaders: 'style-loader!css-loader!postcss-loader'
      },
      {
        test:    /\.html$/,
        exclude: /node_modules/,
        loader:  'file?name=[name].[ext]'
      },
      {
        test:    /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader:  'elm-webpack'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
    ],
    noParse: /\.elm$/
  },

	postcss: function() {
		return [cssnext, autoprefixer];
	},

  devServer: {
    inline: true,
    stats: { colors: true }
  }
};
