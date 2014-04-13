var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');
var redis = require("redis");

describe('redis test', function() {

　　beforeEach(function() {
　　　　console.log('setup');
　　});

　　afterEach(function() {
　　　　console.log('teardown');
　　});

　　before(function() {
　　　　console.log('before createClient');
	   client = redis.createClient();

　　});

　　after(function() {
　　　　console.log('after');
　　});

　　it('should be my first test', function() {
　　　　expect(1).to.equal(1);
	   client = redis.createClient();
	   setTimeout(function(){
	   	　console.log('client='+client.print);
	   },500);

　　});

　　// describe('inner suite', function() {
// 　　　　it('should be my second test', function() {
// 　　　　　　expect(2).to.equal(2);
// 　　　　　　console.log('test 2');
// 　　　　});
// 　　});

});