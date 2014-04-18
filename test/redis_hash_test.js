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
	
	it('should be hmset usage', function(done) {
		
		// hash remove key 
		client.HDEL("test_hash_multi_key", "key_1",function(err,result){
			console.log('hmkey = '+util.inspect(result, false, null));
		  
			if (err) return done(err);
		  
			expect(result).to.be.ok;
		  
			done();
		});
	
	});
	
	it('should be hmset usage', function(done) {
		
		// hash exists key
		client.HEXISTS("test_hash_multi_key", "key_no_key",function(err,result){
			console.log('hmkey = '+util.inspect(result, false, null));
		  
		  	if (err) return done(err);
		 
		  	expect(result).to.not.be.ok;
		  
		  	done();
		});
	
	});

});