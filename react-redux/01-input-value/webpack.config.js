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
    entry: "./index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/static/'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [definePlugin],
    resolve: {
        alias: {
            
        }
    }
};