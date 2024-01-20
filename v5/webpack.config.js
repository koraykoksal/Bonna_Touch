module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'raw-loader',
        },
        // diğer kurallarınız burada yer alabilir
      ],
    },
    // ...
  };