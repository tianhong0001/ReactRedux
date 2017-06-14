import path from 'path';
import webpack from 'webpack';

module.exports = {
    devtool: "eval-source-map",
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'client'),
            loader: ['react-hot-loader', 'babel-loader']
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}