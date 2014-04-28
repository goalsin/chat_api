var util = require('util');
var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');

var app = require('../app');
var client  = app.get('db');

var user_model = require('../models/course_model');

var request = require('superagent');

describe('Course model suite', function() {

	beforeEach(function() {
		console.log('setup');
	});

	afterEach(function() {
		console.log('teardown');
	});

	before(function() {
		console.log('before');
		console.log('host='+client.host + ' & port='+client.port);
		
	    client.hset("user_sang", "name", "alfred sang", app.redis.print);
	    client.hset(["user_sang", "birthday", "1986-03-17"], app.redis.print);
		client.hset("user_sang", "universty", "ccut", app.redis.print);
	});

	after(function() {
		console.log('after');
	});

	// it('should be drop user', function(done) {
	// 	var u = user_model.drop_user_with_uid_and_email(175,'shiren1112@126.com',function(data){
	// 		expect(data.statue.code).to.equal(0);
	// 		
	// 		console.log('drop user result = '+util.inspect(data, false, null));
	// 		done();
	// 	},function(e){
	// 		done();
	// 	}); 
	// });
});