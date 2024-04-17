const {merge} = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json")
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode:"production",
    output:{
        filename:'[name].[contenthash].js'//pattern of the filename 
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"container",//not mandatory
            remotes:{
                marketing:`marketing@${domain}/marketing/remoteEntry.js`,//here we are assuming that our marketing project is nested inside the folder marketing in aws
            },
            shared:packageJson.dependencies
        })
    ]

}

module.exports = merge(commonConfig,prodConfig)