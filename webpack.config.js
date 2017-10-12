const path = require('path');

module.exports = {
    entry: './src',
    output: {
        filename: 'react-animation-components.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'react-animations',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        modules: [path.join(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)?$/,
                exclude: /\.test.js/,
                loader: 'babel-loader',
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'prop-types': 'prop-types',
        'react-transition-group': 'react-transition-group',
    },
};
