var app = require('../app');
var client  = app.get('db');

var util = require('util');

console.log(util.inspect(client, false, null));
// console.log(util.inspect(util, {showHidden: false, depth: null}));

exports.add = function(name, age){
  // console.log('-------model.add'+ app.redis);
  
  // client.set("string key", "string val", app.redis.print);
  // 
  // console.log(client.port +'======');
  // console.log(client.get("string key") +'======');
  // 
  // client.hset("hash key", "ttt 1", "some value", app.redis.print);
  // client.hset(["hash key", "ttt 2", "some other value"], app.redis.print);
  // client.hkeys("hash key", function (err, replies) {
  //     console.log(replies.length + " replies:");
  // 	  console.log('\n\n'+replies);
  // 	  console.log('\n\n');
  //     replies.forEach(function (reply, i) {
  // 		  console.log('   *reply='+reply + '\n');
  // 		   console.log('   *key='+client.hget("hash key",reply));
  // 		  
  //         console.log("#    " + i + ": " + reply+': '+client.get(reply));
  //     });
  //     client.end();
  // });
  
  client.hgetall("hash key", function(err, replies){	
      console.log(replies.length + " replies:");
	  //alternative shortcut
	  // console.log(util.inspect(replies, false, null));
	  
	  for (var property in replies) {
		  var i = property + ': ' + replies[property]+'; ';
		  console.log(i);
	  }
	  
	  

		  //   
	  // for(var h in replies){
	  // 		  console.log(h+'=h');
	  // 	  console.log(util.inspect(h, false, null));
	  // }
	  // 
  });
  
  
  
  return true;
};
