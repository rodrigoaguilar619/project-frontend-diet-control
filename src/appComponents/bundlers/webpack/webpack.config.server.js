import pathDevServer from 'path';
import { executeCommonServerConfig } from './webpack.common.js';

function executeConfigServer(mode, args) {
  let webpackConfig = executeCommonServerConfig(mode, args);
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

export default executeConfigServer;
