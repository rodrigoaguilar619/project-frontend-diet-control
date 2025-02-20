
/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import dotenv from 'dotenv';
import pathVite from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import customHtmlPlugin from './customVitePluginHtml.js';
import fs from 'fs';
import checker from 'vite-plugin-checker';

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(function (file) {
      var curPath = pathVite.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        //removeDir(curPath); // Recursively delete subfolders
      }
      else {
        removeFile(dirPath, file); // Delete files
      }
    });
    /*fs.rmdirSync(dirPath); // Remove the now-empty folder
    console.log("Deleted folder: ".concat(dirPath));*/
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
  var localDir = pathVite.dirname(localHtmlPath);
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

    let regex = new RegExp("..\/" + buildFilesPath, "g");
    var updatedData = data.replace(regex, buildFilesPath);

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

  var mode = enviroment;
  var isProduction = mode === 'production';
  var buildFilesPath = "bundles";
  var removeWarning = true;
  //var dirNameLibs = pathVite.resolve(__dirname, '../../../');

  var envFilePath = pathVite.resolve(args.dirname, "./config/env/.env.".concat(mode));
  dotenv.config({ path: envFilePath });

  var distPath = pathVite.resolve(args.dirname, 'dist');
  var distEnvironmentPath = pathVite.join(distPath, 'dist_' + mode);

  return {
    build: {
      target: ['es2020'],
      outDir: distEnvironmentPath,
      assetsDir: buildFilesPath,
      sourcemap: isProduction ? false : true,
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
              if (id.includes('primeng-table'))
                return 'vendor-primeng-table';
              if (id.includes('primeng-datepicker'))
                return 'vendor-primeng-datepicker';
              if (id.includes('primeng'))
                return 'vendor-primeng';
              if (id.includes('@ng-select'))
                return 'vendor-ng-select';
              if (id.includes('@coreui'))
                return 'vendor-coreui';
              if (id.includes('forms'))
                return 'vendor-forms';
              if (id.includes('db'))
                return 'vendor-db';
              if (id.includes('@fortawesome'))
                return 'vendor-fontawesome';
              if (id.includes('ngx-scrollbar'))
                return 'vendor-ngx-scrollbar';
              if (id.includes('moment'))
                return 'vendor-moment';
              if (id.includes('axios'))
                return 'vendor-axios';
              if (id.includes('zone'))
                return 'vendor-zone';
              if (id.includes('lodash'))
                return 'vendor-lodash';

              return 'vendor'; // Other vendor libraries
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
          var distPath = pathVite.resolve(args.dirname, distEnvironmentPath);
          var oldPath = pathVite.join(distPath, 'public/indexVite.html');
          var newPath = pathVite.join(distPath, 'index.html');
          updateIndexHtml(oldPath, newPath, buildFilesPath);
          removeDir(pathVite.join(distPath, 'public'));
          removeFile(distPath, 'indexWebpack.html');
          removeFile(distPath, 'indexVite.html');
        },
      },
    ],
    define: {
      'import.meta.vitest': mode !== 'production',
      'process.env': process.env,
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
