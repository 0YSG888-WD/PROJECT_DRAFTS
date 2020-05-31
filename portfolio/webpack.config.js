const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: "[name].css"
})


module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: "file-loader",
                    options: { outputPath: "images" }
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.glsl$/i,
                loader: 'webpack-glsl-loader'
            },
            {
                test: /\.obj$/i,
                loader: 'webpack-obj-loader'
            }
        ]
    },
    plugins: [ 
        htmlPlugin, 
        miniCssPlugin,
    ]
} 