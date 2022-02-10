const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 删除输出文件夹内的内容
        new HtmlWebpackPlugin({
            filename: 'index.html', // 输出文件夹内的 输出文件名
            title: 'developing...',
            template: 'index.template.html', // 从根目录开始的模板文件
            favicon: 'index.template.favicon.ico', // 网站的小图标
            inject: 'body', // script标签位于html文件的 body 底部
            meta: {
                viewport: 'width=device-width, initial-scale=1.0'
            }
        })
    ],
    devServer: {
        port: 3000
    }
};