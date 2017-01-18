// This config is extented from webpack.config.js. We use it for development with webpack-dev-server and autoreload/refresh

var webpack = require('webpack');
var Config = require('webpack-config').Config;
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var mainConfig = new Config().extend("webpack.config");

var devConfigExtension = {
    debug: true,
    entry: {
        app: [
            // We are using next two entries for hot-reload
            //'webpack-dev-server/client?http://localhost:3333',
            //'webpack/hot/only-dev-server',
            'webpack-hot-middleware/client',
            './app/app.js'
        ]//.concat(mainConfig.entry.app)
    },
    resolve: {
        extensions: ['', '.tsx', '.ts', '.js', '.less','.css'],
        modulesDirectories: ["node_modules"]
    },
    output: {
        filename: '[name].js',
        publicPath: "/dist/"
    },

    // more options here: http://webpack.github.io/docs/configuration.html#devtool
    devtool: 'source-map',//为了使用less sourcemap 不要用eval-source-map

    //watch: true,

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                exclude : /node_modules/
            },
            //{ test: /\.css$/, exclude: /\.import\.css$/,  loader: "style!css", include: path.resolve(__dirname, "app") },
            { test: /\.css$/,  loaders: ['style', "css"]},
            {
                test: /\.less$/,
                //loader: ExtractTextPlugin.extract("css?sourceMap!postcss?sourceMap!less?sourceMap"),
                loaders: ['style', "css?sourceMap","less?sourceMap"],
                include: path.resolve(__dirname, "app")
            }, /*{
                test: /\.less$/,
                exclude: path.resolve(__dirname, "app", "styles") ,
                loaders: [
                    'style?sourceMap',
                    'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'less?sourceMap'
                ]
            },*/
            //{ test: /\.css$/, loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less", include: path.resolve(__dirname, "app") },
            { test: /\.(jpg|png|jpg|png|woff|eot|ttf|svg|gif)$/, loader: "url?limit=10000" }
        ]
    },
    /*postcss: function () {
        return [require('autoprefixer')];
    },*/
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        /*new ExtractTextPlugin("[name].css", {
            allChunks: false
        }),*/
        // Used for hot-reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

mainConfig.module.loaders = [];
mainConfig.resolve.alias = {};
mainConfig.plugins = [];

module.exports = mainConfig.merge(devConfigExtension);
