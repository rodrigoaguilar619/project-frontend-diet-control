const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { AngularWebpackPlugin } = require('@ngtools/webpack');

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
            main: './src/mainWebpack.ts'
        },
        output: {
            path: path.resolve(args.dirname, '../../dist/dist_' + enviroment),
            filename: 'bundles/[name].[fullhash].bundle.js',
            chunkFilename: 'bundles/[name].chunk.js',
        },
        resolve: {
            extensions: ['.ts', '.js'],
            modules: [path.resolve('node_modules'), 'node_modules'],
            alias: {
                "src": path.resolve(args.dirname, '../../src'),
                "@app": path.resolve(args.dirname, '../../src')
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
                        path.resolve(args.dirname, '../../src'),
                        path.resolve(args.dirname, '../../node_modules', 'project-frontend-diet-control'),
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

    let dotEnvFile;

    if (args.dotEnvFile)
        dotEnvFile = "../../config/env/" + args.dotEnvFile;
    else
        dotEnvFile = enviroment === 'production' ? '../../config/env/.env.production' : '../../config/env/.env.development';

    return [
        new Dotenv({
            path: path.resolve(args.dirname, dotEnvFile), // Specify the path to your .env file
        }),
        new HtmlWebpackPlugin({
            title: args.htmlTitle,
            template: path.resolve(__dirname, "../../../public/index.html"),
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
function executeCommonConfig(enviroment, args) {

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
                    reportFilename: path.resolve(args.dirname, '../../dist/report_' + enviroment + '.html'),
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
function executeCommonServerConfig(enviroment, args) {

    return {
        ...getCommonConfig(enviroment, args),
        plugins: [
            ...getCommonPlugins(enviroment, args),
        ],
    }
}

module.exports = {
    executeCommonConfig: executeCommonConfig.bind(this),
    executeCommonServerConfig: executeCommonServerConfig.bind(this)
};
