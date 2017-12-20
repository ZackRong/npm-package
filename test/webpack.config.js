/**
 * Created by rongzhx on 2017/12/20 0020.
 */
const path = require('path');

const config = {
	entry:{
		index:path.join(__dirname, 'example', 'index.js')
	},
	output:{
		// path:'./dist/',
		filename:'bundle.js',
		// publishPath:'/assest/'
	},
	module:{
		loaders:[{
			test: /\.(js|jsx)$/,
			loader:'babel-loader'
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, 'example')
	}
}

module.exports = config;