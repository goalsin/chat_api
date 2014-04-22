var dbm = require('./datamodel');

//------------------------- 私有方法 -------------------------
exports.get_unique_userid_with_exec_once = function(cb_s,cb_e){
	return dbm.exec_once('INCR',"global:nextUserId",cb_s,cb_e);
};

exports.get_unique_userid_with_exec = function(res,cb_s,cb_e){
	return dbm.exec('INCR',"global:nextUserId").then(function(data){
		 res.send('respond with a resource' + data);
	}).fail(function (error) {
		console.log('error = '+util.inspect(result, false, null));
	}).done();
};
