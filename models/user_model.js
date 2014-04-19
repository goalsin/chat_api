/**
 * INCR global:nextUserId => 1000
 * SET uid:1000:username antirez
 * SET uid:1000:password p1pp0
 *
 *
 */ 
exports.add = function(name, password){
	var util = require('util');
	var app = require('../app');
	var client = app.get('db');
	
	// // hash exists key
	client.INCR("global:nextUserId", function(err,result){
		console.log('hmkey = '+util.inspect(result, false, null));
  
		// if (err) return done(err);
		//   
		return result;
	});
  	 
	return true;
};
