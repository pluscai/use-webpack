const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');


const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
     }),
    new CleanWebpackPlugin()
];

const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
files.forEach(file => {
    if(/.*\.dll.js/.test(file)) {
        plugins.push(new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../dll', file)
        }),)
    }
    if(/.*\.manifest.json/.test(file)) {
        plugins.push( new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dll', file)
        }),)
    }
})


module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{ 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                use: [{
                    loader: 'babel-loader'
                }]
               
            },{
                test: /\.(png|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // 下面[name]这种写法就是placeholder-占位符
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 10240 // 1024=1k 图片小于10k就转base64
                    }
                }
        },{
            test: /\.(eot|woff|ttf|svg)$/,
            use: {
                loader: "file-loader"
            }
        } ]
    },
    plugins,
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports: true,
        splitChunks: {
          chunks: 'all' // 同步异步代码都做代码分割
        }
    },
    performance: false,
    output: {
		path: path.resolve(__dirname, '../dist')
	}
}