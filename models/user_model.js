/**
 * INCR global:nextUserId => 1000
 * SET uid:1000:username antirez
 * SET uid:1000:password p1pp0
 *
 *
 */ 

exports.getUniqueUserId = function(){
	var util 	= require('util');
	var app 	= require('../app');
	var Q 		= require('q');
	
	var client 	 	= app.get('db');
	var deferred 	= Q.defer();
	
	client.INCR("global:nextUserId", function(error,result){
	    if (error) {
	        deferred.reject(new Error(error));
	    } else {
			console.log('hmkey = '+util.inspect(result, false, null));
			
	        deferred.resolve(result);
	    }
	});
	
	return deferred.promise;
};



exports.add = function(name, password){
	var util 	= require('util');
	var app 	= require('../app');
	var Q 		= require('q');
	
	var client 	= app.get('db');
	
	// // hash exists key
	client.INCR("global:nextUserId", function(err,result){
		
  
		// if (err) return done(err);
		//   
		return result;
	});
  	 
	return true;
	
	var deferred = Q.defer();
	client.INCR("global:nextUserId", function(error,result){
	    if (error) {
	        deferred.reject(new Error(error));
	    } else {
			console.log('hmkey = '+util.inspect(result, false, null));
			
	        deferred.resolve(result);
	    }
	});
	
	return deferred.promise;
};
