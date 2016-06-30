var etp = require("extract-text-webpack-plugin");
var hwp = require("html-webpack-plugin");
module.exports = {
	plugins : [new etp("style.css"),new hwp({
		template : "./index.html"
	})],
	entry : {
		main : "./main.js"
	},
	output : {
		path : "./dist",
		filename : "[hash]-bundle.js"
	},
	module : {
		loaders : [
	      	{ 
	      		test: /\.(css|less)$/,
	      		loader: etp.extract("css!less") 
	      	},
	      	{ 
	      		test: /\.(jpg|png)$/,
//	      		loader: "url-loader?limit=500000&name=images/[hash][name].[ext]" 
	      		loader: "file-loader?limit=500000&name=images/[hash][name].[ext]" 
	      	},
	      	{
	      		test : /\.html/,
	      		loader : "html"
	      	}
	      	
	    ]
	},
	resolve : {
		extensions : ["",".js"]
	}
}























