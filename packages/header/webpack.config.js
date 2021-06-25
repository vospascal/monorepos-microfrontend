const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      remotes: {
        // nav: "nav@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/Header",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        redux: {
          singleton: true,
          requiredVersion: deps["redux"],
        },
        "react-redux": {
          singleton: true,
          requiredVersion: deps["react-redux"],
        },
        "redux-saga": {
          singleton: true,
          requiredVersion: deps["redux-saga"],
        },
        "@reduxjs/toolkit": {
          singleton: true,
          requiredVersion: deps["@reduxjs/toolkit"],
        },
        lodash: {
          singleton: true,
          requiredVersion: deps["lodash"],
        },
        invariant: {
          singleton: true,
          requiredVersion: deps["invariant"],
        },
        "hoist-non-react-statics": {
          singleton: true,
          requiredVersion: deps["hoist-non-react-statics"],
        },
        "react-router": {
          singleton: true,
          requiredVersion: deps["react-router"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
        "connected-react-router": {
          singleton: true,
          requiredVersion: deps["connected-react-router"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // chunks: ["main"],
    }),
  ],
};
