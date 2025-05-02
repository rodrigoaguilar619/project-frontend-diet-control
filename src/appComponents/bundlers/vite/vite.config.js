
/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import dotenv from 'dotenv';
import pathVite from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import customHtmlPlugin from './customVitePluginHtml.js';
import fs from 'fs';
import checker from 'vite-plugin-checker';

const vendorMappings = [
  { key: 'primeng-table', label: 'vendor-primeng-table' },
  { key: 'primeng-datepicker', label: 'vendor-primeng-datepicker' },
  { key: 'primeng', label: 'vendor-primeng' },
  { key: '@ng-select', label: 'vendor-ng-select' },
  { key: '@coreui', label: 'vendor-coreui' },
  { key: 'forms', label: 'vendor-forms' },
  { key: 'db', label: 'vendor-db' },
  { key: '@fortawesome', label: 'vendor-fontawesome' },
  { key: 'ngx-scrollbar', label: 'vendor-ngx-scrollbar' },
  { key: 'moment', label: 'vendor-moment' },
  { key: 'zone', label: 'vendor-zone' },
  { key: 'lodash', label: 'vendor-lodash' },
];

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(function (file) {
      let curPath = pathVite.join(dirPath, file);
      if (!fs.lstatSync(curPath).isDirectory())
        removeFile(dirPath, file); // Delete files
    });
  }
}
function removeFile(distPath, fileName) {
  try {
    if (fs.existsSync(distPath + '/' + fileName)) {
      fs.unlinkSync(distPath + '/' + fileName);
      console.log("File \"".concat(fileName, "\" deleted successfully."));
    }
  }
  catch (error) {
    console.error("Error deleting file \"".concat(fileName, "\":"), error);
  }
}
function copyFiles(publicHtmlPath, localHtmlPath) {
  let localDir = pathVite.dirname(localHtmlPath);
  if (!fs.existsSync(localDir)) {
    fs.mkdirSync(localDir, { recursive: true });
  }
  if (!fs.existsSync(localHtmlPath)) {
    fs.copyFileSync(publicHtmlPath, localHtmlPath);
  }
}
function updateIndexHtml(oldPath, newPath, buildFilesPath) {
  fs.readFile(oldPath, 'utf8', function (err, data) {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    let regex = new RegExp("../" + buildFilesPath, "g");
    let updatedData = data.replace(regex, buildFilesPath);

    fs.writeFile(newPath, updatedData, 'utf8', function (err) {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('File successfully updated');
    });
  });
}

function viteConfig(enviroment, args) {

  console.log("Vite is running in ".concat(enviroment, " mode"));

  let mode = enviroment;
  let isProduction = mode === 'production';
  let buildFilesPath = "bundles";
  let removeWarning = true;

  let envFilePath = pathVite.resolve(args.dirname, "./config/env/.env.".concat(mode));
  dotenv.config({ path: envFilePath });

  let distPath = pathVite.resolve(args.dirname, 'dist');
  let distEnvironmentPath = pathVite.join(distPath, 'dist_' + mode);
  let packageJson = JSON.parse(fs.readFileSync(pathVite.resolve(args.dirname, 'package.json'), 'utf-8'));

  return {
    build: {
      target: ['es2020'],
      outDir: distEnvironmentPath,
      assetsDir: buildFilesPath,
      sourcemap: !isProduction,
      minify: isProduction ? 'esbuild' : false,
      rollupOptions: {
        output: {
          entryFileNames: buildFilesPath + "/js/[name].js",
          chunkFileNames: buildFilesPath + "/js/[name]-[hash].js",
          assetFileNames: function ({ name }) {
            if (/\.(gif|jpe?g|png|svg)$/.test(name !== null && name !== void 0 ? name : '')) {
              return buildFilesPath + '/images/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name !== null && name !== void 0 ? name : '')) {
              return buildFilesPath + '/css/[name]-[hash][extname]';
            }
            return buildFilesPath + '/assets/[name]-[hash][extname]';
          },
          manualChunks: function (id) {
            if (id.includes('node_modules')) {
              const match = vendorMappings.find(mapping => id.includes(mapping.key));
              return match ? match.label : 'vendor';
            }

            return null;
          },
        },
      },
    },
    resolve: {
      mainFields: ['module'],
      alias: {
        '@app': pathVite.resolve(args.dirname, './src'),
        src: pathVite.resolve(args.dirname, './src'),
      },
    },
    plugins: [
      angular(),
      checker({
        typescript: true,
        overlay: isProduction ? false : removeWarning, // Prevents errors from showing in the browser overlay
        terminal: true, // Ensures errors appear only in the terminal
      }),
      visualizer({
        open: false,
        filename: 'dist/report_' + mode + '.html',
        gzipSize: true,
        brotliSize: true,
      }),
      customHtmlPlugin({
        minify: isProduction,
        entry: '/src/main.ts',
        template: 'public/indexVite.html',
        inject: {
          data: {
            title: args.htmlTitle,
          },
        },
      }),
      {
        name: 'rename-index-html',
        closeBundle: function () {
          console.log("test close bundle");
          let distPath = pathVite.resolve(args.dirname, distEnvironmentPath);
          let oldPath = pathVite.join(distPath, 'public/indexVite.html');
          let newPath = pathVite.join(distPath, 'index.html');
          updateIndexHtml(oldPath, newPath, buildFilesPath);
          removeDir(pathVite.join(distPath, 'public'));
          removeFile(distPath, 'indexWebpack.html');
          removeFile(distPath, 'indexVite.html');
        },
      },
    ],
    define: {
      'import.meta.vitest': mode !== 'production',
      'process.env': { ...process.env, APP_VERSION: packageJson.version },
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: removeWarning, // Suppresses warnings from dependencies
        },
      },
    },
    base: './',
    server: {
      port: 3000,
      open: true,
      host: 'localhost',
      hmr: true,
    },
  }
}

export default viteConfig;
