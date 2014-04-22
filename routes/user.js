var util = require('util');


var user_model = require('../models/user_model');

/* GET users listing. */
exports.list = function(req, res){
  res.send('respond with a resource');
};

/* 用户注册. */
exports.register = function(req, res){
	
  //var app = require('../app');
  // console.log('hmkey = '+util.inspect( app.get('db'), false, null));
  
  user_model.getUniqueUserId().then(function(data){
  	res.send('respond with a resource' + data);
  }).done();
  
  //user_model.add('alfred','000000');
};
