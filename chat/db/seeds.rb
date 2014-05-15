# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u = User.create(:email => 'shiren1118@126.com',:password => '000000')

c = Course.create( 
	:name => 'how to study nodejs',
	:image => "http://img.mukewang.com/5344ead10001ec2506000338-300-170.jpg",
	:desc => '想了解前后端通力合作的整个作业线流程吗？本课程就带你完整实现一个从前端到后端的项目，包括nodejs、express、mongodb、jade 模板引擎的使用，以及bootstrap/jQuery的实际应用及场景评估，让你更好的窥探前端的职业发展，为进一步快速自学打下基础。',
	:document => 'document',
	:week => 2,
	:price => 200.00,
	:author => 'alfred'
)

c.user = u;
c.save

c1 = Course.create( 
	:name => '学习ruby gem',
	:image => 'http://img.mukewang.com/536ae8850001575606000338-300-170.jpg',
	:desc => '你在Ruby世界看到到处都是Gem。他们几乎是所有的Ruby应用程序的核心。我承认当我试着建立第一个Gem的时候，我有点战战兢兢。但我很快就发现了，这玩意简单得要死。在这个博客系列中，我将涵盖从头开始创建一个Gem的基础，然后转移到更高级的主题，包括Gem生成工具和Rails引擎。首先，对于你们这些Ruby有新手，第一个问题是：什么是Gem？简而言之，它是打包的Ruby代码。在最低限度，Gem包括一个Ruby文件和一个gemspec。gemspec（Gem规范）描述Gem信息，RubyGems包管理器需要这些信息安装Gem。',
	:document => '文档啊文档',
	:week => 4,
	:price => 500.00,
	:author => 'zhangting'
)

c1.user = u;
c1.save


# rails g model tclass name:string start:string end:string desc:text count:integer


class1 = Tclass.create(
	:name =>'2月班级',
	:desc => '这个班级只招收2月份的学生',
	:start =>'2014-02-01',
	:end => '2014-02-29',
	:count => 10
)

class2 = Tclass.create(
	:name =>'3月班级',
	:desc => '这个班级只招收3月份的学生',
	:start =>'2014-02-01',
	:end => '2014-02-29',
	:count => 10
)


class3 = Tclass.create(
	:name =>'4月班级',
	:desc => '这个班级只招收4月份的学生',
	:start =>'2014-02-01',
	:end => '2014-02-29',
	:count => 10
)

class4 = Tclass.create(
	:name =>'5月班级',
	:desc => '这个班级只招收5月份的学生',
	:start =>'2014-02-01',
	:end => '2014-02-29',
	:count => 10
)


class1.course = c1
class1.save


class2.course = c1
class2.save


class3.course = c1
class3.save


class4.course = c1
class4.save

