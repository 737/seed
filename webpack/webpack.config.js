var webpack = require('webpack');
var path = require('path');


// definePlugin 会把定义的string 变量插入到Js代码中。
var definePlugin = new webpack.DefinePlugin({
    __DEV__: 'true',
    __TIMESTAMP__: JSON.stringify(new Date())
});

// CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


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
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [definePlugin],
    resolve: {
        alias: {
            Toolkit: './util/toolkit.js'
        }
    }
};