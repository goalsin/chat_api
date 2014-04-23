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
	return dbm.exec('hexists',["user:email_to_uid",email]);
};


// SET uid:1000:username antirez
// SET uid:1000:password p1pp0
exports._create_user_with_uid = function(uid ,username ,password){
	console.log('username' +username);
	return dbm.exec('mset',
					['uid:' + uid + ':username',username
					,'uid:' + uid + ':password',password
					]
	).then(function(result){
		return dbm.exec('mget',['uid:' + uid + ':username','uid:' + uid + ':password']);
	});
}
// exports.is_user_exist = function(){
// 	return dbm.exec('INCR',"global:nextUserId");
// };


/**
 * @param = email
 * @param = username
 * @param = password
 */ 
exports.register = function(user ,cb_s ,cb_e){
	var util = require('util');

	return this._is_exist().then(function(re){
		return dbm.exec('INCR',"global:nextUserId");
	}).then(function(uid){
		console.log('## uid='+uid);
		this.uid = uid
		return dbm.exec('hmset',['uid:' + uid , 'email',user.email,'username',user.username,'password',user.passwd]);
	}).then(function(user){
		console.log('## save uid='+user);
		return dbm.exec('hmget',['uid:' + this.uid + ':username','uid:' + this.uid + ':password']);
	}).then(function(user){
		console.log('## save111 uid='+this.uid);
		// console.log('redis return result = '+util.inspect(this, false, null));
		return dbm.exec('HVALS',['uid:' + this.uid]);
		
	}).then(function(result){
		
		console.log('## result='+result);
		if(result){
			result.uid = this.uid;
			
			var user = {
				uid:this.uid,
				email:result[0].toString(),
				username:result[1].toString(),
				password:result[2].toString()
			};
			
			cb_s(user );
		}
	}).fail(function(error){
		cb_e(error);
	}).done();
	
	
	return dbm.exec_once('MSET','uid',uid,'name',user_obj.name,'passwd',user_obj.passwd,cb_s,cb_e);
};

exports.get_user_with_uid = function(uid ,cb_s ,cb_e){
	console.log('get_user_with_uid');
	dbm.exec_once('mget',['uid:' + uid + ':username','uid:' + uid + ':password'],cb_s,cb_e);
};


