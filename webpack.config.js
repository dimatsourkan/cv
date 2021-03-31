const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ROOT = path.resolve(__dirname, './src');
const DESTINATION = path.resolve(__dirname, './dist');

module.exports = {
    context: ROOT,
    target: 'web',

    entry: {
        'app': './index.ts'
    },

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: ROOT + "/index.html",
            inject: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            /****************
             * PRE-LOADERS
             *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /****************
             * LOADERS
             *****************/
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader', 'resolve-url-loader'],
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: DESTINATION,
        compress: true,
        open: true,
        hot: true,
        port: 8080,
    }
};

