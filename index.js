const config = {
    "env": {
        "server": {
            "plugins": [
                require.resolve('babel-plugin-transform-es2015-modules-commonjs'),
                [ require.resolve('babel-plugin-css-modules-transform'), {
                    "generateScopedName": "[hash:8]",
                    "extensions": [ ".css" ]
                } ]
            ]
        }
    }
};

if (process.env.NODE_ENV === 'test') {
    module.exports = Object.assign({}, config, {
        presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-2'),
            require.resolve('babel-preset-react')
        ]
    })
} else {
    module.exports = Object.assign({}, config, {
        presets: [
            [ require.resolve('babel-preset-es2015'), { modules: false } ],
            require.resolve('babel-preset-stage-2'),
            require.resolve('babel-preset-react')
        ],
        plugins: [
            require.resolve('react-hot-loader/babel')
        ]
    });
}
