const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeRoot = path.join(__dirname, 'node_modules');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  	src: path.join(__dirname, 'src'),
    srcJs: path.join(__dirname, 'src/js'),
    srcCss: path.join(__dirname, 'src/css'),
  	dist: path.join(__dirname, 'dist'),
    distJs: path.join(__dirname, 'dist/js'),
    devSrc: path.join(__dirname, 'build'),
}

const config = {
	entry:{
        test:path.resolve(PATHS.srcJs, 'test'),
        common: ['react', 'react-dom']
    },
	output:{
		path: PATHS.distJs,
		filename: '[name].js',
        publicPath: 'js/'
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
  			loader: 'style!css',
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
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
}

if(TARGET ===  'start' || !TARGET){
    module.exports = merge(config, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.src,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
} else if(TARGET === 'build'){
    module.exports = merge(config, {
        plugins:[
            new HtmlWebpackPlugin({
                template: './src/test.html',       //html模板路径
                filename:path.resolve(PATHS.dist,'test.html'), //生成的html存放路径，相对于 path
                inject: 'body',
                hash:true,
                minify:{                         //压缩HTML文件
                    removeComments:true,         //移除HTML中的注释
                    collapseWhitespace:true,     //删除空白符与换行符
                }
            })
        ]
    });
} else {
    module.exports = config;
}


