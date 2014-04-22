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
  
  // user_model.getUniqueUserId().then(function(data){
  // 	res.send('respond with a resource' + data);
  // }).done();

  //way 1	
  //user_model.get_unique_userid_with_exec(res);
	  
 
  //way 2		  
  user_model.get_unique_userid_with_exec_once(function(data){
  	  res.send('respond with a resource: ' + data);
  },function(error){
  	  res.send('respond with a error: ' + error);
  });

};
