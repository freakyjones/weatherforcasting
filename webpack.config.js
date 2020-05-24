const path=require('path');
const htmlplugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path: path.join(__dirname,'dist'),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                  }
                }
              },
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
              }

        ]
    },
    plugins:[new htmlplugin({
        template:'./src/index.html'
    })]

}