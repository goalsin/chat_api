/**
 * utils method for api render
 * author by alfred.sang
 */ 

/**
 * 处理api错误
 */ 
exports.api_error = function(code, message){
	var error_json = {
		status:{
			'code':code || '1986',
			'msg':message ||'位置错误，api_error没有给出提示'
		},
		data:{}
	}
	
	return error_json;
}

/**
 * wrap obj to api json format
 */ 
exports.api_json = function(obj){
	var api_json = {
		status:{
			'code'	: '0',
			'msg'	: '请求成功'
		},
		data:obj
	}
	
	return api_json;
}