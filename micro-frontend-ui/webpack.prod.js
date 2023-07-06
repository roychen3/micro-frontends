module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/components/index',
  output: {
    filename: 'components.js',
    library: {
      type: 'module',
    },
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
};
