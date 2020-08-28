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
                loader: "babel-loader"
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
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: "css-loader"
                },
                'sass-loader',
                'postcss-loader'
            ]
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                "css-loader",
                'postcss-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
         }),
        new CleanWebpackPlugin(),
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}