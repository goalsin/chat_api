/**
 * model 
 * author by alfred.sang
 */ 

/**
 * 生成password，并加salt
 */ 
exports.gen_salt = function(command,args){
	var util 	= require('util');
	var Q 		= require('q');
	var deferred 	= Q.defer();
	
	Q.longStackSupport = true;
	
	var bcrypt = require('bcrypt');
	
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash("B4c0/\/", salt, function(error, hash) {
	        // Store hash in your password DB.
		    if (error) {
		        deferred.reject(new Error(error));
		    } else {
				console.log('bcrypt return result = '+util.inspect(hash, false, null));
			
		        deferred.resolve(result);
		    }
	    });
	});
	
	return deferred.promise;
}

/**
 * 根据已有hashed_password，校验其是否正确
 */ 
exports.verify = function(hashed_password){
	var util 	= require('util');
	var Q 		= require('q');
	var deferred 	= Q.defer();
	
	Q.longStackSupport = true;
	
	var bcrypt = require('bcrypt');
	bcrypt.compare("B4c0/\/", hashed_password, function(err, res) {
	    // res == true
	    if (error) {
	        deferred.reject(new Error(error));
	    } else {
			console.log('bcrypt verify return result = '+util.inspect(result, false, null));
		
	        deferred.resolve(result);
	    }
	});
	
	return deferred.promise;
}