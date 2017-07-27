var express = require('express');
var router = express.Router();
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = "mongodb://127.0.0.1:27017/project";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.all('/register', function(req, res) {
	console.log(req.query)
	// 1. 获取传过来的参数
	MongoClient.connect(DB_CONN_STR, function(err, db) {
		if (err) {
			res.send('<h1>网络异常，请稍候重试</h1>');
		} else {
			// 得到 集合的对象
			var conn = db.collection('users');
			conn.find(req.query).toArray(function(err, arr){
				if (err) {
					res.send('查询出错');
				}else{
					if (arr.length > 0){
						console.log(11111);
						res.send('登陆成功');
					}else{
						async.series([
							function(cb){
								conn.find({user: req.query.user}).count(function(err, num){
									if (err) {
										cb('err', '查询失败');
									}else{
										if(num>0){
											cb('err', '用户名存在');
										}else{
											cb(null);
										}
									}
								})
							},
							function(cb){
								conn.save(req.query, function(err, info) {

								if (err) {
									cb('err', '注册失败');
								} else {
									cb(null, '注册成功');
								}
		
							})
							}
						],function(err,result){
							if (err) {
								res.send(result);
							} else {
								// 注册成功之后的处理
								res.send('登录成功');
							}
						})
					}
				}
			})

			
		}
	})

})


module.exports = router;
