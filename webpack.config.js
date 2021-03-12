const path = require('path')
/*const VueLoaderPlugin = require('vue-loader/plugin')
*/
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js'), // путь, куда мы хотим положить файл с результатом сборки
    filename: 'index.js' // имя файла с результатом сборки
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
}