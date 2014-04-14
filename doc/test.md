# mocha bdd

测试代码

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
