var util = require('util');
var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');

var app = require('../app');
var client  = app.get('db');

var user_model = require('../models/course_model');

var request = require('superagent');

describe('ZCourse model suite', function() {

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

    it('should respond to course/create',function(done){
		request
			.post('http://127.0.0.1:3000/api/course/create.do')
			.send({
				'name':'study how to write jquery plugin',
				'desc':'use 5 demo',
				'created_time':'2014-04-28',
				'author':'alfred.sang',
				'document':'...here document...'
			})
			.set('Accept', 'application/json')
	        .end(function(res)
			{
				console.log('result = '+ res);
				// 
				expect(res.body.data.name).to.equal("study how to write jquery plugin");
          	  	done()
      		}
		)
    })
	
    it('should respond to course/get',function(done){
		request
			.get('http://127.0.0.1:3000/course/get?cid=41')
			.set('Accept', 'application/json')
	        .end(function(res)
			{
				expect(res.body.data.name).to.equal("study how to write jquery plugin");
          	  	done()
      		}
		)
    })
	
});