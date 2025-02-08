import executeConfigBuild from "../../../src/appComponents/bundlers/webpack/webpack.config.build.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
function runConfigBuildDev(_arg, _env) {

  const mode = "development";
  const htmlTitle = "html title dev";
  const dirname = __dirname;

  let mainWebpack = executeConfigBuild(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config dev", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}

export default runConfigBuildDev;
