var util = require('util');
var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');

var app = require('../app');
var client  = app.get('db');

var user_model = require('../models/user_model');

var request = require('superagent');

describe('user model suite', function() {

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

	it('should be redis.createClient', function() {
		expect(6379).to.equal(client.port);
		expect('127.0.0.1').to.equal(client.host);
	});

	it('should be user model test', function(done) {
		
	     client.hgetall("user_sang", function(err, replies){	
	          // console.log(replies.length + " replies:");
		   	  //alternative shortcut
		   	  console.log(util.inspect(replies, false, null));
			  
	  		  if (err) return done(err);
			  
			  var myname = replies['name'].toString();
			  var birthday = replies['birthday'].toString();
			  var universty = replies['universty'].toString();
			  
			  expect(replies).to.have.property('name').with.length(11);
			  
			  expect(birthday).to.equal("1986-03-17");
			  expect(myname).to.equal("alfred sang");
			  expect(universty).to.equal("ccut");
			  
			  done();
	     });
	});

    it('should respond to GET',function(done){
		request
        	.get('http://127.0.0.1:3000/user/register?name=sang&password=ssl0417&email=shiren1117@126.com')
			.end(function(res)
			{
				expect(res.text).to.equal('{\n  "status": {\n    "code": "10001",\n    "msg": "此email已经存在"\n  },\n  "data": {}\n}');
				done()
      		}
		);
    })
	
    it('should respond to POST',function(done){
		request
			.post('http://127.0.0.1:3000/api/user/register.do')
			.send({
				name:'sang',
				password:'ssl0417',
				email:'shiren1117@126.com'
			})
			.set('Accept', 'application/json')
	        .end(function(res)
			{
				// todo
				// expect(res.text).to.equal('{\n  "status": {\n    "code": "10001",\n    "msg": "此email已经存在"\n  },\n  "data": {}\n}');
          	  	done()
      		}
		)
    })
	
    it('should respond to POST login',function(done){
		request
			.post('http://127.0.0.1:3000/api/user/login.do')
			.send({
				password:'ssl0417',
				email:'shiren1117@126.com'
			})
			.set('Accept', 'application/json')
	        .end(function(res)
			{
				// todo
				// expect(res.text).to.equal('{\n  "status": {\n    "code": "10001",\n    "msg": "此email已经存在"\n  },\n  "data": {}\n}');
          	  	done()
      		}
		)
    })
		
	it('should be drop user', function(done) {
		var u = user_model.drop_user_with_uid_and_email(175,'shiren1112@126.com',function(data){
			expect(data.statue.code).to.equal(0);
			
			console.log('drop user result = '+util.inspect(data, false, null));
			done();
		},function(e){
			done();
		}); 
	});
});