import pathVite from 'path';
import { defineConfig } from 'vite';
import viteConfig from '../../../src/appComponents/bundlers/vite/vite.config';

const mode = "production";
const htmlTitle = "html title prodruction";
const dirname = pathVite.resolve(__dirname, '../../../');

export default defineConfig(() => ({

  ...viteConfig(mode, { dirname: dirname, htmlTitle: htmlTitle }),
}));
