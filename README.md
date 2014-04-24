# Chat api


## 准备

```
npm install
```

## 启动服务器

```
npm start
```

## 执行测试

```
npm test
```

## 执行单个测试

```
./node_modules/mocha/bin/mocha  -u bdd -R spec grep test/user*
```

## Tech Stack

SuperAgent is a small progressive client-side HTTP request library, and Node.js module with the same API, sporting many high-level HTTP client features. View the [docs](http://visionmedia.github.com/superagent/).


use [superagent](https://github.com/visionmedia/superagent) to mock http request


## 参考

- [redis](redis.io)

- [express guide](https://github.com/azat-co/expressjsguide/blob/master/res/app.js)

- [start-a-new-node-js-express-app-the-right-way/](http://www.bearfruit.org/2013/06/21/start-a-new-node-js-express-app-the-right-way/)

- [express 3x/api](http://expressjs.com/3x/api.html) | [express 4x/api](http://expressjs.com/4x/api.html)

- [mocha](http://visionmedia.github.io/mocha/)

- [chai assert](http://chaijs.com/)

- [node book](http://book.mixu.net/node/index.html)

- http://www.infoq.com/articles/surviving-asynchronous-programming-in-javascript
- [control flow](http://book.mixu.net/node/ch7.html)
- [async](https://github.com/caolan/async) vs [q](https://github.com/kriskowal/q)
- [node-js-tutorials](http://www.cnblogs.com/lhb25/archive/2013/12/05/node-js-tutorials.html)

- [q](https://gist.github.com/guptag/7205768)

- [angularjs-authentication-with-cookies-vs-token/](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/)

- [redis case](http://redis.io/topics/twitter-clone)

twitter-clone会有问题，比如用户，纯string实现，很明显不是好方法，比如校验email或者name唯一就做不到

最好的办法当然是把它们当做一个key了，这样就可以用redis自己的exist方法了。
