import { executeCommonConfig } from './webpack.common.js';

function executeConfigBuild(mode, args) {
  return executeCommonConfig(mode, args);
}

export default executeConfigBuild;
