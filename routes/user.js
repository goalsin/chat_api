var util = require('util');


var user_model = require('../models/user_model');

/* GET users listing. */
exports.list = function(req, res){
  res.send('respond with a resource');
};

/* 用户注册. */
exports.register = function(req, res){
	console.log('hmkey = '+util.inspect( req.query  , false, null));
	
  	var user = {};
	user.username = req.param('name')
	user.passwd = req.param('password')
	user.email = req.param('email')

	user_model.register(user ,function(data){
		res.send(data);
	},function(error){
	  res.send('respond with a error: ' + error);
	});
};
