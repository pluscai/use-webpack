const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [{
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
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}