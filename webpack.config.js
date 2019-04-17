const path = require("path");

module.exports = {
    mode: "development",
    entry: ["./src/index"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader", "react-hot-loader/webpack"]
            }
        ]
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    devServer: {
        hot: false,
        hotOnly: true,
        contentBase: path.join(__dirname, "www")
    }
};