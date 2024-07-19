const configAppDevServer = require("../../src/appComponents/webpack/webpack.config.server.js");

module.exports = (_arg, _env) => {

  const mode = "development";
  const htmlTitle = "html title dev server";
  const dirname = __dirname;

  let mainWebpack = configAppDevServer.executeConfigServer(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config dev server", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}