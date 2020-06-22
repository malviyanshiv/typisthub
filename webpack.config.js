const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const isProduction = env === "production";

    return {
        mode: isProduction ? "production" : "development",
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js",
        },
        devtool: isProduction ? "source-map" : "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: [/node_modules/],
                    loader: "babel-loader",
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [require("autoprefixer")],
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "style.css",
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, "public"),
            compress: true,
        },
    };
};
