const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const nodeRoot = path.join(__dirname, 'node_modules');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

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
        index: path.resolve(PATHS.src, 'index'),
        common: ['react', 'react-dom']
    },
    output: {
        path: PATHS.static,
        filename: '[name].js',
        publicPath: 'static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        root: __dirname,
        alias:{
            normalize: path.resolve(normalizePath, 'normalize.css'),
            fontAwesome: path.resolve(fontawesomePath, 'css/font-awesome.min.css'),
            components: path.join(PATHS.src, 'components'),
            containers: path.join(PATHS.src, 'containers')
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: PATHS.src
        }, {
            test: /\.css$/,
            loader: 'style!css',
            include: [PATHS.src, normalizePath, fontawesomePath]
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            include: PATHS.src
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url?limit=25000',
            include: [PATHS.src, fontawesomePath]
        }],
        noParse: ['react', 'react-dom']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}