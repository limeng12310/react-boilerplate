var path = require("path");
var webpack = require('webpack');

var nodeModulesPath = path.join(__dirname, 'node_modules');
var isProduction = process.env.NODE_ENV == "production";
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    // entry points - each will produce one bundled js file and one css file if there is any css in dependency tree
    entry: {
        vendors: [
            'redux',
            'react',
            'react-dom',
            'babel-polyfill'
        ],
        app: [
            path.join(__dirname, 'app', 'app.tsx')
        ]
    },

    // This is path to loaders
    resolveLoader: {
        root: nodeModulesPath
    },

    resolve: {
        extensions: ['', '.tsx', '.ts', '.js', '.less','.css'],
        modulesDirectories: ["app","node_modules"], //http://davidboyne.co.uk/2016/04/29/react-webpack-gem.html
        alias: {
            'react$': path.join(nodeModulesPath, 'react', 'react.js'),
            'react-dom': path.join(nodeModulesPath, 'react-dom', 'index.js'),
            'redux': path.join(nodeModulesPath, 'redux','lib', 'index.js'),
            'babel-polyfill': path.join(nodeModulesPath, 'babel-polyfill', 'lib', 'index.js'),
        }
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]_[chunkhash].js'
    },

    module: {
        preLoaders: [
            { test: /\.tsx?$/, loader: "tslint", include: path.resolve(__dirname, "app") },
        ],
        noParse: [],
        loaders: [
            // TODO remove crazy require when https://github.com/babel/babel-loader/issues/166 is fixed.
            {
                test: /\.tsx?$/,
                loader: 'babel?cacheDirectory,plugins[]=' + require.resolve(path.join(nodeModulesPath, 'babel-plugin-external-helpers-2')) +
                ',presets[]=' + require.resolve(path.join(nodeModulesPath, 'babel-preset-es2015-loose')) +
                '!ts-loader?configFileName=tsconfig.json',
                include: path.resolve(__dirname, "app")
            },
            { test: /\.css$/,  loader: "style-loader!css-loader?minimize", include: path.resolve(__dirname, "app") },
            { test: /\.less$/, exclude: /\.module\.less$/, loader: "style-loader!css-loader?minimize!less-loader?compress", include: path.resolve(__dirname, "app") },
            { test: /\.css\.less$/,
                loader: "style-loader!css-loader?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader?-compress",
                include: path.resolve(__dirname, "app") },
            { test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/, loader: "file-loader?name=[name]_[hash].[ext]", include: path.resolve(__dirname, "app") }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor_[chunkhash].js' }),
        new ExtractTextPlugin("[name].css",{
            allChunks: false
        })
    ],

    tslint: {
        // Rules are in tslint.json
        emitErrors: true, // false = WARNING for webpack, true = ERROR for webpack
        formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
    },
};

if (isProduction) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {NODE_ENV: '"production"'}
    }));
}

module.exports = config;