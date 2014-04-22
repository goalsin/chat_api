

## redis support commond

```

// http://code.google.com/p/redis/wiki/CommandReference
exports.commands = [
    // Commands operating on all value types
    "EXISTS", "DEL", "TYPE", "KEYS", "RANDOMKEY", "RENAME", "RENAMENX", "DBSIZE", "EXPIRE", "TTL", "SELECT",
    "MOVE", "FLUSHDB", "FLUSHALL",
	
    // Commands operating on string values
    "SET", "GET", "GETSET", "MGET", "SETNX", "SETEX", "MSET", "MSETNX", "INCR", "INCRBY", "DECR", "DECRBY", "APPEND", "SUBSTR",
    
	// Commands operating on lists
    "RPUSH", "LPUSH", "LLEN", "LRANGE", "LTRIM", "LINDEX", "LSET", "LREM", "LPOP", "RPOP", "BLPOP", "BRPOP", "RPOPLPUSH",
    
	// Commands operating on sets
    "SADD", "SREM", "SPOP", "SMOVE", "SCARD", "SISMEMBER", "SINTER", "SINTERSTORE", "SUNION", "SUNIONSTORE", "SDIFF", "SDIFFSTORE",
    "SMEMBERS", "SRANDMEMBER",
    
	// Commands operating on sorted zsets (sorted sets)
    "ZADD", "ZREM", "ZINCRBY", "ZRANK", "ZREVRANK", "ZRANGE", "ZREVRANGE", "ZRANGEBYSCORE", "ZCOUNT", "ZCARD", "ZSCORE",
    "ZREMRANGEBYRANK", "ZREMRANGEBYSCORE", "ZUNIONSTORE", "ZINTERSTORE",
    
	// Commands operating on hashes
    "HSET", "HSETNX", "HGET", "HMGET", "HMSET", "HINCRBY", "HEXISTS", "HDEL", "HLEN", "HKEYS", "HVALS", "HGETALL",
    
	// Sorting
    "SORT",
    
	// Persistence control commands
    "SAVE", "BGSAVE", "LASTSAVE", "SHUTDOWN", "BGREWRITEAOF",
    
	// Remote server control commands
    "INFO", "MONITOR", "SLAVEOF", "CONFIG",
    
	// Undocumented commands
    "PING"
];
```

## multi hash set

```
client.hmset(["hashmkey", "ttt 1", "some other value", "ttt 2", "some other value"], app.redis.print);
```



## node_redis的封装

### way 1

in route

	exports.register = function(req, res){
		user_model.get_unique_userid_with_exec(res);
	});

in model	
	
	exports.get_unique_userid_with_exec = function(res,cb_s,cb_e){
		return this.exec('INCR',"global:nextUserId").then(function(data){
			 res.send('respond with a resource' + data);
		}).fail(function (error) {
			console.log('error = '+util.inspect(result, false, null));
		}).done();
	};
	
	
### way 2


in route

	exports.register = function(req, res){
	    //way 2		  
	    user_model.get_unique_userid_with_exec_once(function(data){
	    	  res.send('respond with a resource: ' + data);
	    },function(error){
	    	  res.send('respond with a error: ' + error);
	    });
	});

in model

	exports.get_unique_userid_with_exec_once = function(cb_s,cb_e){
		return this.exec_once('INCR',"global:nextUserId",cb_s,cb_e);
	};


