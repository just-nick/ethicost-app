var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const MACQUARIE_CLIENT_ID = process.env.MACQUARIE_CLIENT_ID;

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    devtool: 'eval-source-map',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: /(node_modules|public\/)/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|public\/)/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'import-glob-loader']
            },
            {
                test: /\.(svg|jpg|png)?$/,
                exclude: /(node_modules|public\/)/,
                use: ['file-loader?name=[name]-[hash:6].[ext]']
            }
        ]
    },
    devServer: {
        port: 4200,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false
            }
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'}
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                js: [ "bundle.js"]
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                MACQUARIE_CLIENT_ID: JSON.stringify(MACQUARIE_CLIENT_ID),
                FB_APP_ID: JSON.stringify('323609098091154')
            }
        })
    ]
};