/**
 * model 
 * author by alfred.sang
 */ 

exports.db = function(command,args){
	var util 	= require('util');
	var app 	= require('../app');
	var Q 		= require('q');
	
	var client 	 	= app.get('db');
	
	return client;
}
/**
 * 通用的exec执行redisclient的命令
 */ 
exports.exec = function(command,args){
	var util 	= require('util');
	var app 	= require('../app');
	var Q 		= require('q');
	
	var client 	 	= app.get('db');
	var deferred 	= Q.defer();
	
	Q.longStackSupport = true;
	
	client.send_command(command, args, function(error,result){
	    if (error) {
	        deferred.reject(new Error(error));
	    } else {
			console.log('redis return result = '+util.inspect(result, false, null));
			
	        deferred.resolve(result);
	    }
	});
	
	return deferred.promise;
}

/**
 * 通用的exec执行redisclient的命令，并直接返回结果
 */ 
exports.exec_once = function(command,args,cb_succuss,cb_error){
	return this.exec(command,args).then(function(data){
		if(cb_succuss){
			cb_succuss(data);
		}
	}).fail(function (error) {
		console.log('error = '+util.inspect(result, false, null));
	}).done();
}