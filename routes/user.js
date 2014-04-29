var util = require('util');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

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
		//res.send(profile);
		// We are sending the profile inside the token
		if(data.status.code == 0){
			// var profile = data.data;
	// 		var token = jwt.sign(profile, 'secret', { expiresInMinutes: 0*1 });
	// 		data.data = { token: token };
			res.json(data);
		}else{
			res.send(data);
		}
		
		
	},function(error){
	  res.send('respond with a error: ' + error);
	});
};


/* 
 * 用户登陆.
 *
 * 使用邮箱和密码登陆
 */
exports.login = function(req, res){
	console.log('hmkey = '+util.inspect( req.query  , false, null));
	
  	var user = {};
	user.passwd = req.param('password')
	user.email = req.param('email')

	user_model.login(user ,function(data){
		//res.send(profile);
		// We are sending the profile inside the token
		if(data.status.code == 0){
			var profile = data.data;
			
			console.log('ddd = '+util.inspect( data  , false, null));
			
			var token = jwt.sign(profile, 'secret', { expiresInMinutes: 60*5 });
			data.data = { token: token };
			

			user_model.save_uid_and_token(profile['uid'] ,token);
			res.json(data);
		}else{
			res.send(data);
		}
	},function(error){
	  res.send('respond with a error: ' + error);
	});
};
