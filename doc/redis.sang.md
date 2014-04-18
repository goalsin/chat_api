

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



