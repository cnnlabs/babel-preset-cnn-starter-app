const path = require('path');
const isTest = process.env.NODE_ENV === 'test';

const createPresets = () => {
    return isTest ? [
        require.resolve('babel-preset-flow'),
        ['babel-preset-env', {
            targets: {
                browsers: [
                    'last 2 versions',
                    'ie >= 9',
                    '> 2%',
                    'ff >= 44',
                    'ios 8'
                ],
                node: 6
            },
            loose: true
        }]
    ] : [
        require.resolve('babel-preset-flow'),
        ['babel-preset-env', {
            modules: false,
            targets: {
                browsers: [
                    'last 2 versions',
                    'ie >= 9',
                    '> 2%',
                    'ff >= 44',
                    'ios 8'
                ],
                node: 6
            },
            loose: true
        }]
    ];
}

const config = {
    presets: createPresets(),
    plugins: [
        require.resolve('babel-plugin-transform-object-rest-spread'),
        require.resolve('babel-plugin-transform-class-properties'),
        require.resolve('babel-plugin-transform-export-extensions'),
        require.resolve('babel-plugin-transform-react-jsx'),
        require.resolve('babel-plugin-syntax-dynamic-import'),
        require.resolve('babel-plugin-transform-react-display-name'),
        [require.resolve('babel-plugin-module-resolver'), {
            extensions: ['.js', '.jsx'],
            alias: { src: path.resolve(process.cwd(), 'src') }
        }],
        require.resolve('react-hot-loader/babel')
    ],
    env: {
        server: {
            plugins: [
                require.resolve('babel-plugin-transform-es2015-modules-commonjs'),
                [require.resolve('babel-plugin-css-modules-transform'), {
                    generateScopedName: '[hash:8]',
                    extensions: ['.css']
                }]
            ]
        },
        test: {
            plugins: [
                require.resolve('babel-plugin-transform-es2015-modules-commonjs')
            ]
        }
    }
}

module.exports = config;
