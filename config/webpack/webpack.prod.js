const configAppProd = require("../../src/appComponents/webpack/webpack.config.build.js");

module.exports = (_arg, _env) => {

  const mode = "production";
  const htmlTitle = "html title prod";
  const dirname = __dirname;

  let mainWebpack = configAppProd.executeConfigBuild(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config prod", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}