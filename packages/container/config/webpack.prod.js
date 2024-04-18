const {merge} = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json")
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode:"production",
    output:{
        filename:'[name].[contenthash].js',//pattern of the filename
        publicPath:"/container/latest/" //This is to prepend the file name with the path like this /container/latest/main.354357387.js
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"container",//not mandatory
            remotes:{
                marketing:`marketing@${domain}/marketing/latest/remoteEntry.js`,//here we are assuming that our marketing project is nested inside the folder marketing in aws and here /latest is added because that is how we added in s3
            },
            shared: packageJson.dependencies
        })
    ]

}

module.exports = merge(commonConfig,prodConfig)