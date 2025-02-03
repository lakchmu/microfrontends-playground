const path = require("path");
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: 'http://localhost:3000/',
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
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
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
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'containerApp',
      remotes: {
        excuseGeneratorApp: 'excuseGeneratorApp@http://localhost:3001/remoteEntry.js',
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
