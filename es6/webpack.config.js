var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/static/'
    },
    module: {
        //加载器配置
        loaders: [
            //.js 文件使用 jsx-loader 来编译处理
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    }
};