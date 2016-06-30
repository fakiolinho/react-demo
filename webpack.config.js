module.exports = {
    entry: './main.js',
    devtool: 'source-map',
    output: {
        filename: './index.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: "style!css!sass"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
