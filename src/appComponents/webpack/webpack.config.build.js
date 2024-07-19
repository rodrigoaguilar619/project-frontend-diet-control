const commonConfigBuild = require('./webpack.common');

function executeConfigBuild(mode, args) {
  return commonConfigBuild.executeCommonConfig(mode, args);
}

module.exports = {
  executeConfigBuild: executeConfigBuild.bind(this)
};