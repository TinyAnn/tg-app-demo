const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeRoot = path.join(__dirname, 'node_modules');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
    src: path.join(__dirname, 'src'),
    srcJs: path.join(__dirname, 'src/js'),
    srcCss: path.join(__dirname, 'src/css'),
    dist: path.join(__dirname, 'dist'),
    static: path.join(__dirname, 'dist/static'),
    devSrc: path.join(__dirname, 'build'),
}

module.exports = {
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
    entry: {
        test: path.resolve(PATHS.srcJs, 'test'),
        common: ['react', 'react-dom']
    },
    output: {
        path: PATHS.static,
        filename: '[name].js',
        publicPath: 'static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: PATHS.src
        }, {
            test: /\.css$/,
            loader: 'style!css',
            include: PATHS.src
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            include: PATHS.src
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000',
            include: PATHS.src
        }],
        noParse: ['react', 'react-dom']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new webpack.HotModuleReplacementPlugin()
    ]
}