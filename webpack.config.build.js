const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const precss            = require('precss');
const autoprefixer      = require('autoprefixer');

const nodeRoot = path.join(__dirname, 'node_modules');

const PATHS = {
  	src: path.join(__dirname, 'src'),
    srcCss: path.join(__dirname, 'src/css'),
  	dist: path.join(__dirname, 'dist'),
    static: path.join(__dirname, 'dist/static'),
    devSrc: path.join(__dirname, 'build')
}

const normalizePath   = path.join(nodeRoot, 'normalize.css');
const fontawesomePath = path.join(nodeRoot, 'font-awesome');
const publicPath = __dirname.replace(/\\/g,'/')+'/dist/static/';

module.exports = {
	entry:{
        index:path.resolve(PATHS.src, 'index'),
        common: ['react', 'react-dom']
    },
	output:{
		path: PATHS.static,
		filename: '[name].[chunkhash].js',
        publicPath: publicPath
	},
	resolve: {
    	extensions: ['', '.js', '.jsx', '.css', '.scss'],
    	root:__dirname,
        alias:{
            normalize: path.resolve(normalizePath, 'normalize.css'),
            fontAwesome: path.resolve(fontawesomePath, 'css/font-awesome.min.css'),
            components: path.join(PATHS.src, 'components'),
            containers: path.join(PATHS.src, 'containers')
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
  			include:[PATHS.src, normalizePath, fontawesomePath]
  		},{
  			test:/\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader','css!postcss!sass'),
  			include:[PATHS.src, fontawesomePath]
  		},{
  			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      		loader: 'url?limit=25000',
      		include:[PATHS.src, fontawesomePath]
  		}],
  		noParse: ['react', 'react-dom']
  	},
    postcss: function () {
        return [autoprefixer, precss];
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            template: './src/index.html',       
            filename:path.resolve(PATHS.dist,'index.html'), 
            inject: 'body',
            hash:false,
            minify:{                         
                removeComments:true,         
                collapseWhitespace:true,     
            },
            favicon:'./src/imgs/fish.jpg'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new ExtractTextPlugin("[name].[chunkhash].css")
    ]
}


