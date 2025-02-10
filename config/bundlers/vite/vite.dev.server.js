import pathVite from 'path';
import { defineConfig } from 'vite';
import viteConfig from '../../../src/appComponents/bundlers/vite/vite.config';

const mode = "development";
const htmlTitle = "html title dev server";
const dirname = pathVite.resolve(__dirname, '../../../');

export default defineConfig(() => ({

  ...viteConfig(mode, { dirname: dirname, htmlTitle: htmlTitle }),
}));
