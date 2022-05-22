module.exports = [
  // ... existing loader config ...
  {
    test: /\.jsx?$/,
    use: {
      loader: "babel-loader",
      options: {
        exclude: /node_modules/,
        presets: ["@babel/preset-react"],
      },
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
    },
  },
  // ... existing loader config ...
];
