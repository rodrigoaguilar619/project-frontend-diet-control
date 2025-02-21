import path from 'path';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ScriptExtHtmlWebpackPlugin from "script-ext-html-webpack-plugin";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { AngularWebpackPlugin } from '@ngtools/webpack';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import fsFile from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Returns a common configuration object based on the provided environment and arguments.
 *
 * @param {string} enviroment - the environment for which the configuration is being generated
 * @param {Record<string, any>} args - additional arguments for configuration
 * @return {object} the common configuration object
 */
function getCommonConfig(enviroment, args) {

    return {
        mode: enviroment,
        entry: {
            'polyfills': './src/polyfills.ts',
            main: './src/main.ts'
        },
        output: {
            path: path.resolve(args.dirname, '../../../dist/dist_' + enviroment),
            filename: 'bundles/[name].[fullhash].bundle.js',
            chunkFilename: 'bundles/[name].chunk.js',
        },
        resolve: {
            extensions: ['.ts', '.js'],
            modules: [path.resolve('node_modules'), 'node_modules'],
            alias: {
                "src": path.resolve(args.dirname, '../../../src'),
                "@app": path.resolve(args.dirname, '../../../src')
            },
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: '@ngtools/webpack'
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',    // Translates CSS into CommonJS
                        'sass-loader'    // Compiles Sass to CSS
                    ],
                },
                {
                    test: /\.html$/,
                    include: [
                        path.resolve(args.dirname, '../../../src'),
                        path.resolve(args.dirname, '../../../node_modules', 'project-frontend-diet-control'),
                    ],
                    loader: 'html-loader'
                },
            ],
        }
    }
}

/**
 * Returns an array of common plugins based on the environment and arguments.
 *
 * @param {string} enviroment - the environment string
 * @param {Record<string, any>} args - the arguments object
 * @return {Array} an array of common plugins
 */
function getCommonPlugins(enviroment, args) {

    let packageJson = JSON.parse(fsFile.readFileSync(path.resolve(args.dirname, '../../../package.json'), 'utf-8'));
    let dotEnvFile;

    if (args.dotEnvFile)
        dotEnvFile = "../../../config/env/" + args.dotEnvFile;
    else
        dotEnvFile = enviroment === 'production' ? '../../../config/env/.env.production' : '../../../config/env/.env.development';

    return [
        new Dotenv({
            path: path.resolve(args.dirname, dotEnvFile), // Specify the path to your .env file
        }),
        new webpack.DefinePlugin({
          'process.env.APP_VERSION': JSON.stringify(packageJson.version),
        }),
        new HtmlWebpackPlugin({
            title: args.htmlTitle,
            template: path.resolve(__dirname, "../../../../public/indexWebpack.html"),
            filename: 'index.html',
            inject: 'body'
        }),
        new AngularWebpackPlugin({
            tsconfig: 'tsconfig.json',
            jitMode: true
        })
    ]
}

/**
 * Execute common configuration for the given environment and arguments.
 *
 * @param {string} enviroment - the environment for configuration
 * @param {Record<string, any>} args - the arguments for configuration
 * @return {object} the merged common configuration
 */
export function executeCommonConfig(enviroment, args) {

    return {
        ...getCommonConfig(enviroment, args),
        plugins: [
            new MiniCssExtractPlugin({
                filename: `styles/[name].[fullhash].css`,
                chunkFilename: 'styles/[name].[fullhash].chunk.js',
            }),
            ...getCommonPlugins(enviroment, args),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimize: true,
            usedExports: true, //removes unused files
            concatenateModules: true,
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                maxSize: 70000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: '~',
                cacheGroups: {
                  vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                  },
                  default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                  }
                }
              },
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            //drop_console: enviroment === 'production' ? true : false,
                            pure_funcs: enviroment === 'production' ? ['console.log'] : []
                        },
                    },
                }),
                new ScriptExtHtmlWebpackPlugin({ custom: { test: /\.js$/, attribute: 'charset', value: 'UTF-8' } }),
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    openAnalyzer: false,
                    reportFilename: path.resolve(args.dirname, '../../../dist/report_' + enviroment + '.html'),
                }),
            ],
        }
    }
}

/**
 * Executes common server configuration based on the environment and arguments.
 *
 * @param {string} enviroment - the environment for which the configuration is executed
 * @param {Record<string, any>} args - the arguments for the configuration
 * @return {object} the merged common configuration with plugins
 */
export function executeCommonServerConfig(enviroment, args) {

    return {
        ...getCommonConfig(enviroment, args),
        plugins: [
            ...getCommonPlugins(enviroment, args),
        ],
    }
}
