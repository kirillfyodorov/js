'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        filename: 'script.js',
        path: __dirname + '/dist/js'
    },
    watch: true,
    devtool: "sourse-map",

    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /(node_modules|bower_components)/,
    //             include: [],
    //             use: {
    //                 loader: 'babel-loader?optional[]=runtime',
    //                 options: {
    //                     presets: [
    //                         ["@babel/env", {
    //                             targets: {
    //                                 edge: '17',
    //                                 firefox: '60',
    //                                 chrome: '67',
    //                                 safari: '11.1',
    //                                 ie: '11'
    //                             },
    //                             useBuiltIns: 'usage'
    //                         }]
    //                     ]
    //                 }
    //             }
    //         }
    //     ]
    // }
    // plugins: [
    //     new UglifyJsPlugin()
    // ]
};