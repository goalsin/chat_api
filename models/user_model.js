var app = require('../app');
var client  = app.get('db');

exports.add = function(name, age){
  // console.log('-------model.add'+ app.redis);
  
  client.set("string key", "string val", app.redis.print);
  client.hset("hash key", "ttt 1", "some value", app.redis.print);
  client.hset(["hash key", "ttt 2", "some other value"], app.redis.print);
  client.hkeys("hash key", function (err, replies) {
      console.log(replies.length + " replies:");
	  console.log('\n\n'+replies);
	  console.log('\n\n');
      replies.forEach(function (reply, i) {
		  console.log('   *reply='+reply + '\n');
		   console.log('   *key='+client.hget("hash key",reply));
		  
          console.log("#    " + i + ": " + reply+': '+client.get(reply));
      });
      client.end();
  });
  
  return true;
};
