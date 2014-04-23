/**
 * model 
 * author by alfred.sang
 */ 

var api 	= require('./utils/api');

/**
 * 
 */ 
exports.EMAIL_EXISTED =  api.api_error('10001','此email已经存在')

/**
 * 
 */ 
exports.CAN_NOT_GET_USER_DETAIL =  api.api_error('10002','无法获取用户信息')


