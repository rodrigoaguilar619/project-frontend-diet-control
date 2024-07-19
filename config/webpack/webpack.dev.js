const configAppDev = require("../../src/appComponents/webpack/webpack.config.build.js");

module.exports = (_arg, _env) => {

  const mode = "development";
  const htmlTitle = "html title dev";
  const dirname = __dirname;

  let mainWebpack = configAppDev.executeConfigBuild(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config dev", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}