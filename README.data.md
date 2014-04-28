
## twitter-clone会有问题

twitter-clone会有问题，比如用户，纯string实现，很明显不是好方法，比如校验email或者name唯一就做不到

最好的办法当然是把它们当做一个key了，这样就可以用redis自己的exist方法了。


## model


### 自增ID

global:nextUserId 用户自增id

global:nextCourseId 课程自增id


### 用户表（#1）

用户表 = 'uid:' + uid（hash）

	{	
		'email'
		'username'
		'password'
	}

### 课程表（#2）
	
课程表 = 'course_id:' + cid（hash）

	{	
		'name'
		'created_time'
		'desc'
		'author'
		'document'
	}

### 用户课程表 	
用户课程表 = 'uid:' + uid + ':courses'(一个用户有多个课程sorted set)

	key = 'uid:' + uid + ':courses'{
		unix_timestamp(score)
		c_id
	}

数据

	course_001     sang 
	course_002     sang 
	course_002     zhang
	course_003     zhang
	course_004     zhang

 结果
 
	course_001 有{sang}
	course_002 有{sang，zhang}
	course_003 有{zhang}
	course_004 有{zhang}


一个课程有多个班级

一个班级有多个学生（用户）



