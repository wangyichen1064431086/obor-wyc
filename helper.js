const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

var env = new nunjucks.Environment(
	new nunjucks.FileSystemLoader(
		[
			path.resolve(process.cwd(),'views')
		],
		{
			watch:true,
			noCache:true
		}
	),
	{
		autoescape:false
	}
);

function render(template,context){//template为views下的html文件名称，context是object数据，destName是成功后返回的对象中需要用到的值
	return new Promise(function(resolve,reject){
		env.render(template,context,function(err,result){
			if(err){
				reject(err);
			} else {
				resolve(result);
			}
		})
	})
}

function readJson(filename) {
	return new Promise(
		function(resolve,reject) {
			fs.readFile(filename,'utf8',function(err,data){
				if(err){
					console.log('Cannot find file: ' + filename);
					reject(err);
				} else {
					resolve(JSON.parse(data));
				}
			});
		}
	);
}

function readFile(filename){
	return new Promise(
		function(resolve,reject){
			fs.readFile(filename,'utf8',function(err,data){
				if(err){
					console.log('Cannot find file:' + filename);
					reject(err);
				} else {
					resolve(data);
				}
			});
		}
	);
}

module.exports = {
	render:render,
	readJson:readJson,
	readFile:readFile
}