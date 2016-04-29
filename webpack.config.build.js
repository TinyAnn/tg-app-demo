const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  	src: path.join(__dirname, 'src'),
    srcJs: path.join(__dirname, 'src/js'),
    srcCss: path.join(__dirname, 'src/css'),
  	dist: path.join(__dirname, 'dist'),
    static: path.join(__dirname, 'dist/static'),
    devSrc: path.join(__dirname, 'build'),
}

module.exports = {
	entry:{
        test:path.resolve(PATHS.srcJs, 'test'),
        common: ['react', 'react-dom']
    },
	output:{
		path: PATHS.static,
		filename: '[name].[hash].js',
        publicPath: 'static/'
	},
	resolve: {
    	extensions: ['', '.js', '.jsx'],
    	root:__dirname
  	},
  	module:{
  		loaders:[{
  			test: /\.jsx?$/,
  			loader: 'babel',
  			include:PATHS.src
  		},{
  			test:/\.css$/,
  			loader: ExtractTextPlugin.extract('style-loader','css-loader'),
  			include:PATHS.src
  		},{
  			test:/\.scss$/,
  			loader: 'style!css!sass',
  			include:PATHS.src
  		},{
  			test: /\.(png|jpg)$/,
      		loader: 'url?limit=25000',
      		include:PATHS.src
  		}],
  		noParse: ['react', 'react-dom']
  	},
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            template: './src/test.html',       
            filename:path.resolve(PATHS.dist,'test.html'), 
            inject: 'body',
            hash:false,
            minify:{                         
                removeComments:true,         
                collapseWhitespace:true,     
            }
        }),
        new ExtractTextPlugin("styles.[hash].css")
    ]
}


