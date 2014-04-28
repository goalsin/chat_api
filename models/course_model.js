/**
 * 课程model 
 * author by alfred.sang
 *
 * - 课程名称
 * - 创建时间
 * - 详情
 * - 作者
 * - 教案
 */ 

var dbm = require('./datamodel');
var util = require('util');

//-------------------------   attr  -------------------------
exports.name = '';
exports.created_time = '';
exports.desc = '';
exports.author = '';
exports.document = '';

//------------------------- 私有方法 -------------------------

exports._get_courseid = function(){
	return dbm.exec('INCR',"global:nextCourseId");
};


exports._get_by_id = function(cid){
	return dbm.exec('HGETALL',['course_id:' + cid]);
};

//------------------------- api方法 -------------------------

/**
 * 创建教程.
 *
 * @param {String} course
 * @return {Object} exports
 * @api public
 */
exports.create = function(course ,cb_s ,cb_e){
	var util 		= require('util');
	var api_error 	= require('./error');
	var api 		= require('./utils/api');

	this.cid 			= 0;
 	var cname 			= course.cname.toString();
	var cdesc 			= course.cdesc.toString();
	var created_time 	= course.created_time.toString() | '';
	var cauthor 		= course.cauthor.toString() | '';
	var cdocument 		= course.cdocument.toString() | '';
	
	console.log('cname result = '+util.inspect(cname, false, null));
	
	return this._get_courseid().then(function(cid){
		this.cid = cid;
		console.log('##course id='+cid);

		return dbm.exec('hmset',['course_id:' + this.cid ,
			 					 'cname',cname,
								 'cdesc',cdesc,
								 'cauthor',cauthor,
								 'cdocument',cdocument
		]);
	}).then(function(re){
		console.log('##hset id='+re);
		
		return dbm.exec('HGETALL',['course_id:' + this.cid]);
		
	}).then(function(re){
		
		console.log('##hgetall id='+re);
		
		if(re){
				// 		
			// for(var i in re){
			// 	re.i = re[i].toString();
			// }
			// 	
			cb_s( 
				api.api_json({
					'cid':this.cid,
					'name':re.cname.toString(),
					'desc':re.cdesc.toString(),
					//'created_time':re.created_time.toString(),
					'author':re.cauthor.toString(),
					'document':re.cdocument.toString()
				} )
			 );
		}else{
			cb_s( api_error.CAN_NOT_GET_COURSE);
		}
	}).fail(function(error){
		cb_e(error);
	}).done();
}

/**
 * 根据id获取教程.
 *
 * @param {int} course_id
 * @return {Object} exports
 * @api public
 */
exports.get_by_id = function(cid ,cb_s ,cb_e){
	var util 		= require('util');
	var api_error 	= require('./error');
	var api 		= require('./utils/api');
	
	return this._get_by_id(cid).then(function(re){
		this.cid = cid;
		console.log('##hgetall id='+re);
		
		if(re.cname){
			cb_s( api.api_json({
					'cid':this.cid,
					'name':re.cname.toString(),
					'desc':re.cdesc.toString(),
					//'created_time':re.created_time.toString(),
					'author':re.cauthor.toString(),
					'document':re.cdocument.toString()
				} ));
		}else{
			cb_s( api_error.CAN_NOT_GET_COURSE);
		}
	}).fail(function(error){
		cb_e(error);
	}).done();
}
