module.exports = {
    filenameHashing: false, //ファイル名のハッシュ化防止
    productionSourceMap: false, //ソースマップ作成防止
    configureWebpack: {
        optimization: {
            splitChunks: false //チャンクファイルの生成防止
        },
    },
    publicPath: './',
    css: {
        extract: false //cssを別ファイルに分けずに、一個のjsファイルとして出力させる
    }
};