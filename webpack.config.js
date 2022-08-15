const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { mainModule } = require('process')
const PugPlugin = require('pug-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { publicPath } = require('pug-plugin/src/Asset');


module.exports = {
    mode: 'development',
    entry: { index: './src/index.pug'},

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        filename: '[name].bundle.js'
    },

    resolve: {
        alias: {
          Images: path.join(__dirname, 'src/assets/images/'),
          Styles: path.join(__dirname,'src/styles/'),
          Fonts: path.join(__dirname,'src/assets/fonts/')
        }},
    plugins:[
        new PugPlugin({
            pretty: true,
            extractCss: { filename: 'assets/css/[name].css'}}),
    ],

    module: {
        rules: [
            {
                test: /\.pug$/,
                use: { 
                    loader : PugPlugin.loader,
                     },
                
            },
            {
                test: /\.scss$/,
                use: ['css-loader','sass-loader']
            },
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]',}
            },
            {
                test: /\.(ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',}
            },
                    
            
        ]
    }
}