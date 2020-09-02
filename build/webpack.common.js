const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{ 
                test: /\.js$/, 
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
                        limit: 20480 // 2048=1k 图片小于10k就转base64
                    }
                }
        },{
            test: /\.(eot|woff|ttf|svg)$/,
            use: {
                loader: "file-loader"
            }
        } ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
         }),
        new CleanWebpackPlugin()
    ],
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