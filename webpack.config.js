const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入自动生成 index 页面的插件
    //创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件
    filename: 'index.html' // 生成的内存中首页的名称
})

module.exports = {
    mode: "development",
    module: {
        rules: [ // 第三方匹配规则
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, //千万别忘记添加 exclude 排除项
            { test: /\.(jpg|svg|png|gif)$/, use: 'url-loader?limit=4096&name=[name].[ext]' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.vue$/, use: 'vue-loader' },
            // { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader" },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ],
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        htmlPlugin
    ]
}