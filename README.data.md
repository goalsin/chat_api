
## twitter-clone会有问题

twitter-clone会有问题，比如用户，纯string实现，很明显不是好方法，比如校验email或者name唯一就做不到

最好的办法当然是把它们当做一个key了，这样就可以用redis自己的exist方法了。


## model

global:nextUserId 用户自增id

global:nextCourseId 课程自增id


### 用户表

用户表 = uid:' + uid（hash）

	{	
		'email'
		'username'
		'password'
	}

### 课程表
	
课程表 = course_id:' + cid（hash）

	{	
		'name'
		'created_time'
		'desc'
		'author'
		'document'
	}
	
