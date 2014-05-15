
## todo

- 用户登陆(完成)
- 创建课程
- 用户课程表
- 创建班级
- 加入班级

- 班级内聊天


1. 一个用户有多个课程course
1. 一个课程有多个班级
1. 一个班级有多个学生

视频，以后自己写一个gem，抓取优酷或者土豆的视频，然后下载，保存的七牛云存储。

### course

- 课程名称name
- 详情desciption
- 作者author
- 教案document


rails g model course name:string desciption:text document:text author:string

```
一个用户有多个课程
一个课程有多个作者
一个作者有多个课程
```

- 用户参加的课程
- 用户创建的课程

rails g model tclass name:string start:string end:string desc:text count:integer




## 测试

### 简单的rspec

```
require 'spec_helper'

describe "TokenLogins" do
  describe "GET /api/v1/login" do
	before(:each) do
	  @user = User.create(:email=>'test@126.com',:password => "000000")
	end
	
    it "works! (now write some real specs)" do
      get '/api/v1/login?email=test@126.com&password=000000'
      expect(response.status).to be(200)
    end
  end
end
```

用let方法赋值，其实更好

### rspec生命周期

mocha bdd basic测试代码

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

6个方法

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


上面是js里mocha库的bdd方法，rspec与之类似。

### 如何查看rspec built-in-matchers

[rspec built-in-matchers](https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers)



### 如何写好rspec

http://betterspecs.org/zh_cn/


### 测试的gem说明

```
gem "rspec", "~> 3.0.0.beta2"
gem 'rspec-rails', '~> 3.0.0.beta'
gem 'spork-rails', '4.0.0'

gem 'guard-rspec', '~> 4.2.8'
gem 'guard-spork', '1.5.0'

gem 'childprocess'
gem 'launchy'
```

说明

- spork加载rails环境，只有加载变动的代码，测试的时候可以减少加载rails时间
- guard通过watch观察某些文件变动自动运行rspec

### 关于.rspec

```
➜  chat git:(rails) ✗ cat .rspec 
--color
--format documentation
➜  chat git:(rails) ✗ 
```

此处不能用`--drb`,不然是没有rspec结果的


### 关于watch

```
guard :rspec, cmd: 'rspec -f html -o ./tmp/spec_results.html', launchy: './tmp/spec_results.html' do
	watch('app/controllers/api/v1/users_controller.rb')  { "spec/requests/token_logins_spec.rb" }
end
```

watch的语法是，当`app/controllers/api/v1/users_controller.rb`变动的时候
执行cmd + `spec/requests/token_logins_spec.rb`

即

	rspec -f html -o ./tmp/spec_results.html spec/requests/token_logins_spec.rb
	
这就是rspec自动测试



### rspec结果格式2种

以常规的doc方式

```
guard 'rspec', all_after_pass: false , cmd: 'bundle exec rspec --color --format documentation' do
	watch('app/controllers/api/v1/users_controller.rb')  { "spec/requests/token_logins_spec.rb" }
end
```

通过html方式

```
guard :rspec, cmd: 'bundle exec rspec -f html -o ./tmp/spec_results.html', launchy: './tmp/spec_results.html' do
	watch('app/controllers/api/v1/users_controller.rb')  { "spec/requests/token_logins_spec.rb" }
end

```

其实还可以有更多的rspec参数的，请自行查阅


### 没有launchy 问题
如果没有launchy，会报错

```
➜  chat git:(rails) ✗ guard                             
23:57:17 - INFO - Guard is using TerminalTitle to send notifications.
23:57:17 - INFO - Starting Spork for RSpec
Using RSpec, Rails
Preloading Rails environment
Loading Spork.prefork block...
Spork is ready and listening on 8989!
23:57:23 - INFO - Spork server for RSpec successfully started

23:57:23 - INFO - Guard::RSpec is running
23:57:23 - INFO - Guard is now watching at '/Volumes/XP/git/chat_api/chat'
[1] guard(main)> 
23:57:26 - INFO - Run all
23:57:26 - INFO - Running all specs

23:57:30 - ERROR - Guard::RSpec failed to achieve its <run_all>, exception was:
> [#9D9617D09EB1] LoadError: cannot load such file -- launchy
> [#9D9617D09EB1] /Users/sang/.rvm/gems/ruby-2.1.0@rails4.0/gems/guard-rspec-4.2.8/lib/guard/rspec/runner.rb:82:in `require'
> [#9D9617D09EB1] /Users/sang/.rvm/gems/ruby-2.1.0@rails4.0/gems/guard-rspec-4.2.8/lib/guard/rspec/runner.rb:82:in `_open_launchy'
> [#9D9617D09EB1] /Users/sang/.rvm/gems/ruby-2.1.0@rails4.0/gems/guard-rspec-4.2.8/lib/guard/rspec/runner.rb:46:in `block in _run'
> [#9D9617D09EB1] /Users/sang/.rvm/gems/ruby-2.1.0@rails4.0/gems/guard-rspec-4.2.8/lib/guard/rspec/runner.rb:40:in `tap'
```

需要

	gem 'launchy'
	

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

or @see at [CONTRIBUTING.md](CONTRIBUTING.md)


## License

this gem is released under the [MIT License](http://www.opensource.org/licenses/MIT).

