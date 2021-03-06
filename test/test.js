var util = require('util');
var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');

var app = require('../app');
var client  = app.get('db');

var user_model = require('../models/user_model');

describe('my first suite', function() {

	beforeEach(function() {
		console.log('setup');
	});

	afterEach(function() {
		console.log('teardown');
	});

	before(function() {
		console.log('before');
		console.log('host='+client.host + ' & port='+client.port);
	});

	after(function() {
		console.log('after');
	});

	it('should be redis.createClient', function() {
		expect(6379).to.equal(client.port);
		expect('127.0.0.1').to.equal(client.host);
	});

	it('should be my user model test', function(done) {
		expect(1).to.equal(1);
		console.log('test');

		// var b = user_model.add('alfred sang',28);
	     client.hgetall("hash key", function(err, replies){	
	          // console.log(replies.length + " replies:");
		   	  //alternative shortcut
		   	  console.log(util.inspect(replies, false, null));
			  
	  		  if (err) return done(err);
			  
		   	  for (var property in replies) {
		   		  var i = property + ': ' + replies[property]+'; ';
		   		  console.log(i);
		   	  }
	  		  
			  done();
	     });
	});

});