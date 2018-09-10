/// <binding ProjectOpened='Watch - Development' />
"use strict";

const path = require('path');

module.exports = {
    entry: "./wwwroot/scripts/main.js",
    output: {
        filename: 'aeroscenery-hub.js',
        path: path.resolve(__dirname, 'wwwroot/scripts')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
};