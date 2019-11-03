const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
    alias: {
      "@core": path.resolve(__dirname, "src", "core"),
      "@containers": path.resolve(__dirname, "src", "containers"),
      "@enhances": path.resolve(__dirname, "src", "enhances"),
      "@components": path.resolve(__dirname, "src", "components"),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
