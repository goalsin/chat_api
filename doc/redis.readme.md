redis - a node redis client
===========================

This is a Redis client for node.  It is designed for node 0.2.1+ and redis 2.0.1+.  It probably won't work on earlier versions of either.

Most Redis commands are implemented, including MULTI.  The notable exceptions are PUBLISH/SUBSCRIBE, and WATCH/UNWATCH.
These should be coming soon.

## Why?

`node_redis` works in the latest versions of node, is published in `npm`, and is very fast.

`node_redis`可以在最新版本的node上有效，采用`npm`发布，是非常快速的。

The most popular Redis client, `redis-node-client` by fictorial, is very mature and well tested.  If you are running an older version
of node or value the maturity and stability of `redis-node-client`, I encourage you to use that one instead.



`node_redis` is designed with performance in mind.  The included `test.js` runs similar tests to `redis-benchmark`, included with the Redis 
distribution, and `test.js` is faster than `redis-benchmarks` for some patterns and slower for others.  `node_redis` is roughly 6X faster at
these benchmarks than `redis-node-client`.

`node_redis`被设计成高性能的。它包含了`test.js`，运行测试和`redis-benchmark`非常相似，包括了Redis版本，并且在某些模式下，`test.js`比`redis-benchmarks`更快。`node_redis`大约比`redis-node-client`快6倍左右。

## Usage
## 用法

Simple example, included as `example.js`:

    var redis = require("redis"),
        client = redis.createClient();

    client.set("string key", "string val", redis.print);
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        client.end();
    });

This will display:

    mjr:~/work/node_redis (master)$ node example.js 
    Reply: OK
    Reply: 0
    Reply: 0
    2 replies:
        0: hashtest 1
        1: hashtest 2
    mjr:~/work/node_redis (master)$ 


### Sending Commands
### 发送命令

Each Redis command is exposed as a function on the `client` object.

每一个Redis命令都以`client`对象的一个函数形式暴露出来。

All functions take either take either an `args` Array plus optional `callback` Function or
a variable number of individual arguments followed by an optional callback.

所有函数都有一个 `args`数组，外加一个 `callback`的形式，或者独立参数如下可选回调函数

Here is an example of passing an array of arguments and a callback:

下面是一个通过传递数组参数和回调函数的示例:

    client.mset(["test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {});

Here is that same call in the second style:

下面采用第二种风格的同样调用：

    client.mset("test keys 1", "test val 1", "test keys 2", "test val 2", function (err, res) {});
    
Note that in either form the `callback` is optional:

注意：无论那种写法，`callback`回调函数都是可选的：

    client.set("some key", "some val");
    client.set(["some other key", "some val"]);

For a list of Redis commands, see [Redis Command Reference](http://code.google.com/p/redis/wiki/CommandReference)

更多Redis命令列表，请参考[Redis Command Reference](http://code.google.com/p/redis/wiki/CommandReference)


The commands can be specified in uppercase or lowercase for convenience.  `client.get()` is the same as `clieint.GET()`.

命令可以按照约定采用大写或小写形式。`client.get()` 和 `clieint.GET()`是完全一样的。

Minimal parsing is done on the replies.  Commands that return a single line reply return JavaScript Strings, 
integer replies return JavaScript Numbers, "bulk" replies return node Buffers, and "multi bulk" replies return a 
JavaScript Array of node Buffers.  `HGETALL` returns an Object with Buffers keyed by the hash keys.

Minimal parsing is done on the replies.  命令会返回一行Javascript字符，integer时会返回JavaScript Numbers，"bulk" 会返回node Buffers，而"multi bulk" 会返回一个node Buffers的JavaScript Array。`HGETALL`会返回hash键值对应的缓存对象。

`MULTI` is supported.  The syntax is a little awkward:

支持`MULTI`。语法有点笨拙：

    client.multi([
        ["incr", ["multibar"], function (err, res) {
            console.log(err || res);
        }],
        ["incr", ["multifoo"], function (err, res) {
            console.log(err || res);
        }]
    ]);

`MULTI` takes an Array of 3-element Arrays.  The elements are: `command`, `args`, `callback`.
When the commands are all submitted, `EXEC` is called and the callbacks are invoked in order.

`MULTI`带有3个数组元素作为参数。每个元素都是：`command`, `args`, `callback`。
当所有命令被提交，`EXEC` 会被调用，且回调函数会依次调用的。

If a command is submitted that doesn't pass the syntax check, it will be removed from the
transaction.

如果提交的一个命令没有通过语法校验，它会被从事务中移除的。

I guess we also need a callback when `MULTI` finishes, in case the last command gets removed from an error.

我想当`MULTI`结束的时候会我们也会需要一个回调函数的，以防最后一个命令因错误而被移除。

# API

## Events

`client` will emit some events about the state of the connection to the Redis server.

### "connect"

`client` will emit `connect` when a connection is established to the Redis server.

### "error"

`client` will emit `error` when encountering an error connecting to the Redis server.

### "end"

`client` will emit `end` when an established Redis server connection has closed.

## redis.createClient(port, host)

Create a new client connection.  `port` defaults to `6379` and `host` defaults
to `127.0.0.1`.  If you have Redis running on the same computer as node, then the defaults are probably fine.

创建一个新的客户端链接。`port` defaults to `6379` and `host` defaults
to `127.0.0.1`. 如果你有Redis在同一台机器上运行node，默认项就非常好。

`createClient` returns a `RedisClient` object that is named `client` in all of the examples here.

`createClient` 下面的所有例子中都会返回一个名为`client`的`RedisClient`对象。

## client.end()

Close the connection to the Redis server.  Note that this does not wait until all replies have been parsed.
If you want to exit cleanly, call `client.end()` in the reply callback of your last command:

    var redis = require("redis"),
        client = redis.createClient();

    client.on("connect", function () {
        client.set("foo_rand000000000000", "some fantastic value");
        client.get("foo_rand000000000000", function (err, reply) {
            console.log(reply.toString());
            client.end();
        });
    });

## redis.print()

A handy callback function for displaying return values when testing.  Example:

    var redis = require("redis"),
        client = redis.createClient();

    client.on("connect", function () {
        client.set("foo_rand000000000000", "some fantastic value", redis.print);
        client.get("foo_rand000000000000", redis.print);
    });

This will print:

    Reply: OK
    Reply: some fantastic value

Note that this program will not exit cleanly because the client is still connected.

## redis.debug_mode

Boolean to enable debug mode and protocol tracing.

布尔值来启动debug模式和协议跟踪。

    var redis = require("redis"),
        client = redis.createClient();

    redis.debug_mode = true;

    client.on("connect", function () {
        client.set("foo_rand000000000000", "some fantastic value");
    });

This will display:

结果如下：

    mjr:~/work/node_redis (master)$ node ~/example.js 
    send command: *3
    $3
    SET
    $20
    foo_rand000000000000
    $20
    some fantastic value

    on_data: +OK

`send command` is data sent into Redis and `on_data` is data received from Redis.

## client.send_command(command_name, args, callback)

Used internally to send commands to Redis.  For convenience, nearly all commands that are published on the Redis 
Wiki have been added to the `client` object.  However, if I missed any, or if new commands are introduced before
this library is updated, you can use `send_command()` to send arbitrary commands to Redis.

All commands are sent as multi-bulk commands.  `args` can either be an Array of arguments, or individual arguments,
or omitted completely.

## TODO

Need to implement PUBLISH/SUBSCRIBE

Need to implement WATCH/UNWATCH

Add callback for MULTI completion.

Support variable argument style for MULTI commands.

Stream binary data into and out of Redis.


## Also

This library still needs a lot of work, but it is useful for many things.
There are other Redis libraries available for node, and they might work better for you.

Comments and patches welcome.


## LICENSE - "MIT License"

Copyright (c) 2010 Matthew Ranney, http://ranney.com/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
