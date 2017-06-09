'use strict';

exports.__esModule = true;
var isTest = process.env.NODE_ENV === 'test';

var config = {
    presets: [require.resolve('babel-preset-flow'), ['env', {
        modules: false,
        targets: {
            browsers: ['last 2 versions', 'ie >= 9', '> 2%', 'ff >= 44', 'ios 8'],
            node: 4
        },
        loose: true
    }]],
    plugins: [require.resolve('babel-plugin-transform-object-rest-spread'), require.resolve('babel-plugin-transform-class-properties'), require.resolve('babel-plugin-transform-export-extensions'), require.resolve('babel-plugin-transform-react-jsx'), require.resolve('babel-plugin-syntax-dynamic-import'), require.resolve('babel-plugin-transform-react-display-name'), [require.resolve('babel-plugin-module-resolver'), {
        extensions: ['.js', '.jsx'],
        alias: { src: './src' }
    }], require.resolve('react-hot-loader/babel')],
    env: {
        test: {
            plugins: [require.resolve('babel-plugin-transform-es2015-modules-commonjs')]
        }
    }
};

exports.default = config;

// const config = {
//     'env': {
//         'server': {
//             'plugins': [
//                 require.resolve('babel-plugin-transform-es2015-modules-commonjs'),
//                 [ require.resolve('babel-plugin-css-modules-transform'), {
//                     'generateScopedName': '[hash:8]',
//                     'extensions': [ '.css' ]
//                 } ]
//             ]
//         }
//     }
// };

// if (process.env.NODE_ENV === 'test') {
//     module.exports = Object.assign({}, config, {
//         presets: [
//             require.resolve('babel-preset-es2015'),
//             require.resolve('babel-preset-stage-2'),
//             require.resolve('babel-preset-flow'),
//             require.resolve('babel-preset-syntax-jsx'),
//             require.resolve('babel-plugin-transform-react-jsx'),
//             require.resolve('babel-plugin-transform-react-display-name')
//         ]
//     })
// } else {
//     module.exports = Object.assign({}, config, {
//         presets: [
//             [ require.resolve('babel-preset-es2015'), { modules: false } ],
//             require.resolve('babel-preset-stage-2'),
//             require.resolve('babel-preset-react')
//         ],
//         plugins: [
//             require.resolve('react-hot-loader/babel')
//         ]
//     });
// }