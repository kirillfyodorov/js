'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/script.js',
    output: {
        filename: 'script.js',
        path: __dirname + '/dist/js'
    },
    watch: false,
    devtool: "sourse-map",
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            [
                                '@babel/preset-env',
                                {
                                    'targets':{
                                        'browsers': ['last 2 versions', 'ie >= 11']
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
    // plugins: [
    //     new UglifyJsPlugin()
    // ]
};