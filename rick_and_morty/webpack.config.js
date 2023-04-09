module.exports = {
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /.(css|sass|scss)$/,
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif|eps)$/i,
      }
    ]
  }
}