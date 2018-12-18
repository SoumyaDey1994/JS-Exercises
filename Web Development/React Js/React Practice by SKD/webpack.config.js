const configuration={
    entry: "./main.js",    //exceute first file from webpack
    output: {
        path: __dirname , filename: "index.js"
    },
    devServer:{
        inline: true,
        port: 24648
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, //execute all files having .jsx extension
                exclude: /node_modules/, //dont create node_modules
                loader: 'babel-loader', //for loading component
                query: {
                    presets: ['es2015', 'react']  //to execute ecma and react
                }
        }]
    }
}

module.exports= configuration;