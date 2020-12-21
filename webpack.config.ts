import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
const { VueLoaderPlugin } = require('vue-loader')

const config = () => {
    return {
        entry: {
            content_scripts: path.join(__dirname, 'src/config', 'background.ts'),
            template: path.join(__dirname, 'src/template', 'main.js')
        },
        output: {
            // distディレクトリにcontent_scripts.jsを吐く
            path: path.join(__dirname, 'dist'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /.ts$/,
                    use: 'ts-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            },
            extensions: ['.ts', '.js', 'vue']
        },
        plugins: [
            // publicディレクトリにあるファイルをdistディレクトリにコピーする
            new CopyWebpackPlugin({
                patterns: [
                  {from: 'public', to: '.'},
                  {from: 'src/config/manifest.json', to: '.'}
                ]
            }),
          new VueLoaderPlugin()
        ]
    }
}

export default config