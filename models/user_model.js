var dbm = require('./datamodel');
var util = require('util');

//------------------------- 私有方法 -------------------------
exports.get_unique_userid_with_exec_once = function(cb_s,cb_e){
	dbm.exec_once('INCR',"global:nextUserId",cb_s,cb_e);
};

exports.get_unique_userid_with_exec = function(res,cb_s,cb_e){
	return dbm.exec('INCR',"global:nextUserId").then(function(data){
		 res.send('respond with a resource' + data);
	}).fail(function (error) {
		console.log('error = '+util.inspect(result, false, null));
	}).done();
};


exports._get_uid = function(){
	return dbm.exec('INCR',"global:nextUserId");
};


exports._is_exist = function(email){
	console.log('email=' +email);
	return dbm.exec('HEXISTS',["user:email_to_uid",email.toString() ]);
};

exports.get_hashed_password = function(pwd){
	var bcrypt = require('bcrypt');
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync("B4c0/\/", salt);
	console.log(hashedPassword); 
}

exports.verify = function(hashedPassword){
	var passwordHash = require('./lib/password-hash');

    console.log(passwordHash.verify('password123', hashedPassword)); // true
    // console.log(passwordHash.verify('Password0', hashedPassword)); // false
}

/**
 * @param = email
 * @param = username
 * @param = password
 */ 
exports.register = function(user ,cb_s ,cb_e){
	var util 	= require('util');
	var api_error 	= require('./error');
	var api 	= require('./utils/api');

	return this._is_exist(user.email).then(function(re){
		// 第一步：判断email是否存在
		if(re !== 1){
			console.log('## 此email没有存在:'+user.email);
			
			// 第二步：当email不存在的时候，获得自增uid
			return dbm.exec('INCR',"global:nextUserId");
		}else{
			// 如果用户存在，返回错误提示
			return cb_s( api_error.EMAIL_EXISTED );
		}
	}).then(function(uid){
		// 获得自增id，暂存数据
		this.uid = uid;
		this.email = user.email;
		
		// 保存用户信息详情
		return dbm.exec('hmset',['uid:' + uid , 'email',user.email,'username',user.username,'password',user.passwd]);
	}).then(function(user){
		// 保存user:email_to_uid
		return dbm.exec('hmset',['user:email_to_uid' , this.email,this.uid]);
	}).then(function(re){
		// 如果保存成功，返回用户信息
		if(re === 'OK'){
			return dbm.exec('HVALS',['uid:' + this.uid]);
		}else{
			// 返回错误提示
			return cb_s(api_error.CAN_NOT_GET_USER_DETAIL);
		}
	}).then(function(result){
		// 
		console.log('## result='+result);
		
		if(result){
			result.uid = this.uid;
			
			var user = {
				uid:this.uid,
				email:result[0].toString(),
				username:result[1].toString(),
				password:result[2].toString()
			};
				
			// 返回用户信息
			cb_s(api.api_json(user));
		}else{
			// 返回错误提示
			return cb_s(api_error.CAN_NOT_GET_USER_DETAIL);
		}
	}).fail(function(error){
		cb_e(error);
	}).done();
};
