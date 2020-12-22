import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
const { VueLoaderPlugin } = require('vue-loader')
require("babel-polyfill")
// 開発or本番モードの選択(development、production、noneのいずれか設定必須)
// development: 開発時のファイル出力のモード(最適化より時間短縮,エラー表示などを優先)
// production: 本番時のファイル出力のモード(最適化されて出力される)
const MODE = "development";
// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

// プラグイン
// js最適化
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    // エントリーポイント(メインのjsファイル)
    // entry: './src/template/main.js',
    entry: {
        content_scripts: path.join(__dirname, 'src', 'handler.ts'),
        template: ["babel-polyfill", path.join(__dirname, 'src/template', 'main.js')]
    },
    // ファイルの出力設定
    output: {
        // 出力先(絶対パスでの指定必須)
        path: path.resolve(__dirname, 'dist'),
        // 出力ファイル名
        // filename: "[name].js"
    },
    mode: MODE,
    // ソースマップ有効
    devtool: 'source-map',
    // ローダーの設定
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                // ローダーの対象 // 拡張子 .js の場合
                test: /\.js$/,
                // ローダーの処理対象から外すディレクトリ
                exclude: /node_modules/,
                // Babel を利用する
                loader: "babel-loader",
                // Babel のオプションを指定する
                options: {
                    presets: [
                        // プリセットを指定することで、ES2019 を ES5 に変換
                        "@babel/preset-env"
                    ]
                }
            }
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        // Webpackで利用するときの設定
        alias: {
            vue$: "vue/dist/vue.esm.js",
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: ["*", ".ts", ".js", ".vue", ".json"]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/config/manifest.json', to: '.'}
            ]
        }),
        // Vueを読み込めるようにするため
        new VueLoaderPlugin()
    ],
    // mode:puroductionでビルドした場合のファイル圧縮
    optimization: {
        minimizer: MODE
          ? []
          : [
              // jsファイルの最適化
              new TerserPlugin({
                  // すべてのコメント削除
                  extractComments: 'all',
                  // console.logの出力除去
                  terserOptions: {
                      compress: { drop_console: true }
                  },
              }),
          ]
    },
    // js, css, html更新時自動的にブラウザをリロード
    devServer: {
        // サーバーの起点ディレクトリ
        // contentBase: "dist",
        // バンドルされるファイルの監視 // パスがサーバー起点と異なる場合に設定
        publicPath: '/dist/js/',
        //コンテンツの変更監視をする
        watchContentBase: true,
        // 実行時(サーバー起動時)ブラウザ自動起動
        open: true,
        // 自動で指定したページを開く
        openPage: "index.html",
        //　同一network内からのアクセス可能に
        host: "0.0.0.0"
    }
};