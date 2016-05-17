const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeRoot = path.join(__dirname, 'node_modules');

const PATHS = {
  	src: path.join(__dirname, 'src'),
    srcCss: path.join(__dirname, 'src/css'),
  	dist: path.join(__dirname, 'dist'),
    static: path.join(__dirname, 'dist/static'),
    devSrc: path.join(__dirname, 'build'),
}

const normalizePath   = path.join(nodeRoot, 'normalize.css');
const fontawesomePath = path.join(nodeRoot, 'font-awesome');

module.exports = {
	entry:{
        index:path.resolve(PATHS.src, 'index'),
        common: ['react', 'react-dom']
    },
	output:{
		path: PATHS.static,
		filename: '[name].[hash].js',
        publicPath: 'static/'
	},
	resolve: {
    	extensions: ['', '.js', '.jsx', '.css', '.scss'],
    	root:__dirname,
        alias:{
            normalize: path.resolve(normalizePath, 'normalize.css'),
            fontAwesome: path.resolve(fontawesomePath, 'css/font-awesome.min.css')
        }
  	},
  	module:{
  		loaders:[{
  			test: /\.jsx?$/,
  			loader: 'babel',
  			include:PATHS.src
  		},{
  			test:/\.css$/,
  			loader: ExtractTextPlugin.extract('style-loader','css-loader'),
  			include: [PATHS.src, normalizePath, fontawesomePath]
  		},{
  			test:/\.scss$/,
  			loader: 'style!css!sass',
  			include:PATHS.src
  		},{
  			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      		loader: 'url?limit=25000',
      		include:[PATHS.src, fontawesomePath]
  		}],
  		noParse: ['react', 'react-dom']
  	},
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            template: './src/test.html',       
            filename:path.resolve(PATHS.dist,'index.html'), 
            inject: 'body',
            hash:false,
            minify:{                         
                removeComments:true,         
                collapseWhitespace:true,     
            },
            favicon:'./src/imgs/fish.jpg'
        }),
        new ExtractTextPlugin("styles.[hash].css")
    ]
}


