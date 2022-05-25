const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: [
          /node_modules/,
        ],
        use: [
          "thread-loader",
          "babel-loader?cacheDirectory",
        ],
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          "thread-loader",
          "babel-loader?cacheDirectory",
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ],
};

