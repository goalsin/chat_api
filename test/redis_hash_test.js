/**
 * test with redis hash 
 * 
 * author: alfred sang(shiren1118@126.com)
 * 2014@
 */
 
var util = require('util');
var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');

var app = require('../app');
var client  = app.get('db');


describe('redis hash suite', function() {

	beforeEach(function() {
		console.log('setup');
	});

	afterEach(function() {
		console.log('teardown');
	});

	before(function() {
		console.log('before');
		console.log('host='+client.host + ' & port='+client.port);
		
		// hash multi set
		client.hmset(["test_hash_multi_key", "key_1", "first", "key_2", "second"], app.redis.print);
	});

	after(function() {
		console.log('after');
	});

	it('should be redis.createClient', function() {
		expect(6379).to.equal(client.port);
		expect('127.0.0.1').to.equal(client.host);
	});
	
	it('should be hmset usage', function(done) {
		
		// hash exists key
		client.HEXISTS("test_hash_multi_key", "key_1",function(err,result){
			console.log('hmkey = '+util.inspect(result, false, null));
		  
			if (err) return done(err);
		  
			expect(result).to.be.ok;
		  
			done();
		});
		
	});
	
	function print_list_all(){
		// var b = user_model.add('alfred sang',28);
	     client.hgetall("test_hash_multi_key", function(err, replies){	
	          // console.log(replies.length + " replies:");
		   	  //alternative shortcut
		   	  //console.log(util.inspect(replies, false, null));
			  
		   	  for (var property in replies) {
		   		  var i = property + ': ' + replies[property]+'; ';
		   		  console.log(i);
		   	  }
	     });
	}
		
	/**
	 * get current key length: result = 2
	 */
	it('should be HLEN usage before HDEL:  result = 2', function(done) {
		// hash remove key 
		client.HLEN("test_hash_multi_key",function(err,result){
			console.log('HLEN before HDEL = '+util.inspect(result, false, null));
			 
			if (err) return done(err);
		  
			expect(result).to.equal(2);
		  
			done();
		});
	});
	
	it('should be HDEL usage', function(done) {
		print_list_all();
		// hash remove key 
		client.HDEL("test_hash_multi_key", "key_1",function(err,result){
			console.log('hmkey = '+util.inspect(result, false, null));
			 
			if (err) return done(err);
		  
			expect(result).to.be.ok;
		  
			done();
		});
	});
	
	/**
	 * get current key length alfter HDEL: result = 1
	 */
	it('should be HLEN usage alfter HDEL  result = 1', function(done) {
		// hash remove key 
		client.HLEN("test_hash_multi_key",function(err,result){
			console.log('HLEN alfter HDEL  = '+util.inspect(result, false, null));
			 
			if (err) return done(err);
	  
			expect(result).to.equal(1);
		  
			done();
		});
	});
	
	it('should be HEXISTS usage', function(done) {
		// hash exists key
		client.HEXISTS("test_hash_multi_key", "key_no_key",function(err,result){
			console.log('hmkey = '+util.inspect(result, false, null));
		  
		  	if (err) return done(err);
		 
		  	expect(result).to.not.be.ok;
		  
		  	done();
		});
	});

});