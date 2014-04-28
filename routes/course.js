var util = require('util');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var course_model = require('../models/course_model');


/* 
 * 创建课程.
 *
 */
exports.create = function(req, res){
	console.log('hmkey = '+util.inspect( req.param('name') , false, null));
	
  	var course = {};
	
 	//  this.name 			= course.name | '';
	// 	this.desc 			= course.desc | '';
	// 	this.created_time 	= course.created_time | '';
	// 	this.author 		= course.author | '';
	// 	this.document 		= course.document | '';
	


	course.cname 		= req.param('name').toString();
	course.cdesc 		= req.param('desc').toString();
	course.created_time = req.param('created_time');
	course.cauthor 		= req.param('author');
	course.cdocument 	= req.param('document');

    // TODO: verify params
	
	//
	course_model.create(course, function(data){
		if(data.status.code == 0){
			res.json(data);
		}else{
			res.send(data);
		}
	},function(error){
	  res.send('respond with a error: ' + error);
	});
};


/* 
 * 创建课程.
 *
 */
exports.get = function(req, res){
	console.log('hmkey = '+util.inspect( req.query  , false, null));
	
	var cid = req.param('cid');
 

    // TODO: verify params
	
	//
	course_model.get_by_id(cid, function(data){
		if(data.status.code == 0){
			res.json(data);
		}else{
			res.send(data);
		}
	},function(error){
	  res.send('respond with a error: ' + error);
	});
};
