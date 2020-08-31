const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
        new MiniCssExtractPlugin({})
    ]
}

module.exports  = merge(commonConfig, prodConfig);