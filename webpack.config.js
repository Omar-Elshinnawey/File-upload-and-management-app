const webpack = require('webpack'),
    path = require('path');

var config = {

    context: __dirname,

    entry: {
        bundle: './ts/main.ts',
        vendor: './ts/vendor.ts',
        polyfills: './ts/polyfills.ts'
    },

    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: '[name].js',
        publicPath: '/assets/'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: 3000
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        loaders: [{
            test: /\.ts?$/,
            loaders: ['awesome-typescript-loader', 'angular-router-loader'],
            exclude: /node_modules/
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['bundle', 'vendor', 'polyfills']
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),*/
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './public/ts'), {}
        )
    ]
}

module.exports = config;