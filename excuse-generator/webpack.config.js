const path = require("path");
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: 'http://localhost:3001/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    compress: true,
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'excuseGeneratorApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ExcuseGenerator': './src/pages/Generator',
      },
      shared: {
        react: {
            requiredVersion: '^18.3.1',
            singleton: true,
        },
        'react-dom': {
            requiredVersion: '^18.3.1',
            singleton: true,
        },
        '@headlessui/react': {
            requiredVersion: '^2.1.6',
            singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html'}),
  ],
};
