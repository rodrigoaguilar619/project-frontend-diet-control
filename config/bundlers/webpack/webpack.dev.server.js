import executeConfigServer from "../../../src/appComponents/bundlers/webpack/webpack.config.server.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function runConfigServer(_arg, _env) {

  const mode = "development";
  const htmlTitle = "html title dev server";
  const dirname = __dirname;

  let mainWebpack = executeConfigServer(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config dev server", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}

export default runConfigServer;
