const pathDevServer = require('path');
const commonConfigDevServer = require('./webpack.common');

function executeConfigServer(mode, args) {
  let webpackConfig = commonConfigDevServer.executeCommonServerConfig(mode, args);
  webpackConfig.devServer = {
    static: {
      directory: pathDevServer.join(args.dirname, '../../dist'),
    },
    client: {
      logging: 'error', //Remove console logs warings on browser console
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/subpage/, to: '/index.html' },
      ],
    },
    port: 3000,
    host: '0.0.0.0',
    hot: true
  }

  return webpackConfig;
}

module.exports = {
  executeConfigServer: executeConfigServer.bind(this)
};
