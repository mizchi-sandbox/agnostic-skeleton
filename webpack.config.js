var webpack = require("webpack");
var path = require('path');

module.exports = {
  // entry: './bundler.js',

  output: {
    filename: 'public/bundle.js'
  },

  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" }
    ]
  },

  resolve: {
    root: [
        path.join(__dirname, "bower_components"),
        path.join(__dirname, ".compiled/ui")
    ],
    extensions: ["", ".coffee", ".js"]
  },

  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
}
