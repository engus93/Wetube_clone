const path = require("path");
const extractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    mode: MODE,
    module: [
      {
        test: /\.(scss)$/,
        use: extractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ],
    filename: "[name].[format]"
  }
};

module.exports = config;
