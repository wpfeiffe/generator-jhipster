const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ENV = 'prod';

module.exports = webpackMerge(commonConfig({env: ENV}), {
    output: {
        path: './target/www',
        filename: '[hash].[name].bundle.js',
        chunkFilename: '[hash].[id].chunk.js'
    }
});
