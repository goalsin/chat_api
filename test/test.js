var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');

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
　　});

　　after(function() {
　　　　console.log('after');
　　});

　　it('should be my user model test', function() {
　　　　expect(1).to.equal(1);
　　　　console.log('test');

	   var b = user_model.add('alfred sang',28);
	   expect(true).to.equal(b);
　　});

// 　　describe('inner suite', function() {
// 　　　　it('should be my second test', function() {
// 　　　　　　expect(2).to.equal(2);
// 　　　　　　console.log('test 2');
// 　　　　});
// 　　});

});