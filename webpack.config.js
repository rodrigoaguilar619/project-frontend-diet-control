const Dotenv = require('dotenv-webpack');
const path = require('path');

const { merge } = require('webpack-merge');

module.exports = (config, _options) => {

    console.log("Webpack config", JSON.stringify(config.mode, null, 2));
    const customConfig = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                }
            ],
        },
        plugins: [
            new Dotenv({
                path: path.resolve(__dirname, './config/env/.env.' + config.mode),
            })
        ]
    };

    const mergedConfig = merge(config, customConfig);
    return mergedConfig;
};