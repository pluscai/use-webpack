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
    optimization: {
        splitChunks: {
          chunks: 'all',  // 同步异步代码都做代码分割
          minSize: 20000,  // 超过20k才做代码分割
          maxSize: 0,
          minChunks: 1, // 被引用的次数超过1次才做代码分割，否则不做代码分割
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          automaticNameDelimiter: '~', 
          enforceSizeThreshold: 50000,
          cacheGroups: {
            vendors: {  // 如果进行代码分割的模块在node_modules（即使第三方类库），则默认加个vendors前缀
              test: /[\\/]node_modules[\\/]/,
              priority: -10,  // 代码分割时应用该策略的优先级，越大优先级越高
              filename: 'vendors.js'
            },
            default: { // 不是厂商类库，又符合上面的20k、被引用过至少一次的代码被分割打包到common.js里
              priority: -20,
              reuseExistingChunk: true,
              filename: 'common.js'
            }
          }
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}