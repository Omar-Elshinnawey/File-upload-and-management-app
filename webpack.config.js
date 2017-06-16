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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                sequences: true,
                warnings: false,
                properties: true,
                dead_code: true,
                drop_debugger: true,
                conditionals: true,
                unused: true,
                loops: true,
                comparisons: true,
                booleans: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            output: {
                comments: false,
                beautify: false,
                space_colon: false
            },
            sourceMap: false
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './public/ts'), {}
        )
    ]
}

module.exports = config;