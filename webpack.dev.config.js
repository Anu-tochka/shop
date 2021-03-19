const {merge} = require('webpack-merge')
const base = require('./webpack.config') // наша базовая конфигурация

/*const VueLoaderPlugin = require('vue-loader/plugin')
*/
module.exports = merge(base, {
    // все настрйки devServer должны храниться в поле devServer
    devServer: {
      contentBase: './src',
      publicPath: 'index.js',
      host: 'localhost',
      port: 3000,
      hot: true,
    },
    resolve: {
        alias: {
        vue: 'vue/dist/vue.js',
        },
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            use: [
            { loader: 'babel-loader' },
            ]
        },
        {
            test: /\.css$/,
            use: [
            { loader: 'style-loader' },
            { loader: 'css-loader',
            options: {
                modules: true,
            }, 
            }
            ]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
            },
            {
            test: /\.vue$/,
            use: [
                { loader: 'vue-loader' },
            ]
            }
        ]
    },
/*  plugins: [
    new VueLoaderPlugin()
  ] */
})