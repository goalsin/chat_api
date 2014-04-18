# mocha bdd


## basic测试代码

```
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('my first suite', function() {

　　beforeEach(function() {
　　　　console.log('setup');
　　});

　　afterEach(function() {
　　　　console.log('teardown');
　　});

　　before(function() {
　　　　console.log('before');
　　});

　　after(function() {
　　　　console.log('after');
　　});

　　it('should be my first test', function() {
　　　　expect(1).to.equal(1);
　　　　console.log('test');
　　});

　　describe('inner suite', function() {
　　　　it('should be my second test', function() {
　　　　　　expect(2).to.equal(2);
　　　　　　console.log('test 2');
　　　　});
　　});
});

```

输出结果

```
➜  chat_api git:(master) ✗ npm test

> application-name@0.0.1 test /Volumes/XP/git/chat_api
> mocha -u bdd -R spec



  my first suite
before
setup
test
    ✓ should be my first test 
teardown
    inner suite
setup
test 2
      ✓ should be my second test 
teardown
after


  2 passing (11ms)

```


[mocha doc](http://visionmedia.github.io/mocha/)中说

```
The "BDD" interface provides describe(), it(), before(), after(), beforeEach(), and afterEach():
```

分别做如下说明

- describe：相当于suite
- it：相当于test
- before：每个describe最初执行
- after：每个describe最后执行
- beforeEach：每个test最初执行，等同于setup
- afterEach：每个test最后执行，等同于teardown

## 代码同步与异步

异步执行已经见过了，那么，如何让它同步呢？

比如我现在要测试数据库操作，首先要建立db示例连接，这是一个相对耗时的时间，很有可能在测试代码执行之前就完成，那么mocha里怎么做呢？

之前的测试

	it('should be my first test', function() {
		expect(1).to.equal(1);
		console.log('test');
	});

先修改如下：

	it('should be my user model test', function(done) {
		expect(1).to.equal(1);
		console.log('test');

		// var b = user_model.add('alfred sang',28);
	     client.hgetall("hash key", function(err, replies){	

	  		  if (err) return done(err);
			  
		   	  for (var property in replies) {
		   		  var i = property + ': ' + replies[property]+'; ';
		   		  console.log(i);
		   	  }
	  		  
			  done();
	     });
	});

变动说明

- `it('should be my user model test', function(done) {`此处增加一个done参数
- `if (err) return done(err);`
- `done();`

原理很简单，如果it的第二个参数有回调函数，那么整个测试就会等待顺序执行，如果before和beforeEach没有完成，它当然不会先执行的，以此来完成代码同步。

使用promise改成异步写法也不是不可以，就是有点怪。

## dump出对象

console.log还是有点弱爆了，dump对象之类的都无法完成，这时候要用node自己的工具类，具体用法如下：

requirement

	var util = require('util');

usage：

	console.log(util.inspect(util, {showHidden: false, depth: null}));

alternative shortcut

	console.log(util.inspect(object, false, null));
	
给出[console文档](http://nodejs.org/api/console.html#console_console_dir_obj)


## node-redis用法


### hash

#### hgetall

	client.hgetall("hash key", function(err, replies){	
	  //console.log(replies.length + " replies:");
	  //alternative shortcut
	  
	  console.log(util.inspect(replies, false, null));
	  
	  if (err) return done(err);
  
	  for (var property in replies) {
		  var i = property + ': ' + replies[property]+'; ';
		  console.log(i);
	  }
  
	  done();
	});

返回结果

```
{ 'hashtest 1': <Buffer 73 6f 6d 65 20 76 61 6c 75 65>,
  'hashtest 2': <Buffer 73 6f 6d 65 20 6f 74 68 65 72 20 76 61 6c 75 65>,
  'ttt 1': <Buffer 73 6f 6d 65 20 76 61 6c 75 65>,
  'ttt 2': <Buffer 73 6f 6d 65 20 6f 74 68 65 72 20 76 61 6c 75 65> }
	  
hashtest 1: some value; 
hashtest 2: some other value; 
ttt 1: some value; 
ttt 2: some other value; 
```

其中上面的plain object是replies，下面的是每个key对应的值


#### hgetall -user

```
var util = require('util');
var assert = require('chai').assert;
var expect = require('chai').expect;

var routes = require('../routes');

var app = require('../app');
var client  = app.get('db');

var user_model = require('../models/user_model');

describe('user model suite', function() {

	beforeEach(function() {
		console.log('setup');
	});

	afterEach(function() {
		console.log('teardown');
	});

	before(function() {
		console.log('before');
		console.log('host='+client.host + ' & port='+client.port);
		
	    client.hset("user_sang", "name", "alfred sang", app.redis.print);
	    client.hset(["user_sang", "birthday", "1986-03-17"], app.redis.print);
		client.hset("user_sang", "universty", "ccut", app.redis.print);
	});

	after(function() {
		console.log('after');
	});

	it('should be redis.createClient', function() {
		expect(6379).to.equal(client.port);
		expect('127.0.0.1').to.equal(client.host);
	});

	it('should be user model test', function(done) {
		
	     client.hgetall("user_sang", function(err, replies){	
	          // console.log(replies.length + " replies:");
		   	  //alternative shortcut
		   	  console.log(util.inspect(replies, false, null));
			  
	  		  if (err) return done(err);
			  
			  var myname = replies['name'].toString();
			  var birthday = replies['birthday'].toString();
			  var universty = replies['universty'].toString();
			  
			  expect(replies).to.have.property('name').with.length(11);
			  
			  expect(birthday).to.equal("1986-03-17");
			  expect(myname).to.equal("alfred sang");
			  expect(universty).to.equal("ccut");
			  
			  done();
	     });
	});

});
```

说明

- toString用法，redis返回的是buffer，需要转成字符串

### 现在我要实现删除key

- 先打印出key的长度
- 执行删除key
- 打印出删除后的长度

那么我能在一个it测试里做么？

答：不能。

每一个it里只能调用一次done，而同时操作3此，是不合理的，只能分成带有顺序的3个it来完成。


