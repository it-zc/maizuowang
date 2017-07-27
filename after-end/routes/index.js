var express = require('express');
var router = express.Router();
var http=require('http'); 

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//轮播的接口
router.get('/lunbo', function(req, res) {
			var time=new Date().getTime();
	 		http.get('http://m.maizuo.com/v4/api/billboard/home?__t='+time,function(response){
 			var data='';
 			response.on('data',function(chunk){
 					data+=chunk;
 			})
 			response.on('end',function(){
 					res.send(data);
 			})
 		})
});

//首页正在热映的接口
router.get('/nowhot', function(req, res) {
			var time=new Date().getTime();
	 		http.get('http://m.maizuo.com/v4/api/film/now-playing?__t='+time+'&page=1&count=5',function(response){
   			var data='';
   			response.on('data',function(chunk){
   					data+=chunk;
   			})
   			response.on('end',function(){
   					res.send(data);
   			})
   		})
});


//首页即将热映的接口
router.get('/will', function(req, res) {
			var time=new Date().getTime();
	 		http.get('http://m.maizuo.com/v4/api/film/coming-soon?__t='+time+'&page=1&count=3',function(response){
   			var data='';
   			response.on('data',function(chunk){
   					data+=chunk;
   			})
   			response.on('end',function(){
   					res.send(data);
   			})
   		})
});

//影片正在热映
router.get('/hoting', function(req, res) {
			var page = req.query.page;
  			var count = req.query.count;
			var time=new Date().getTime();
	 		http.get('http://m.maizuo.com/v4/api/film/now-playing?page='+page+'&count='+count,function(response){
   			var data='';
   			response.on('data',function(chunk){
   					data+=chunk;
   			})
   			response.on('end',function(){
   					res.send(data);
   			})
   		})
});

//影片即将上映

router.get('/comming', function(req, res) {
			var page = req.query.page;
  			var count = req.query.count;
			var time=new Date().getTime();
	 		http.get('http://m.maizuo.com/v4/api/film/coming-soon?page='+page+'&count='+count,function(response){
   			var data='';
   			response.on('data',function(chunk){
   					data+=chunk;
   			})
   			response.on('end',function(){
   					res.send(data);
   			})
   		})
});

router.get('/detail', function(req, res) {
			var id=req.query.id;
			var time=new Date().getTime();
	 		http.get('http://m.maizuo.com/v4/api/film/'+id+'?__t='+time,function(response){
   			var data='';
   			response.on('data',function(chunk){
   					data+=chunk;
   			})
   			response.on('end',function(){
   					res.send(data);
   			})
   		})
});

//影院借口
router.get('/cinema', function(req, res) {
			var time=new Date().getTime();
	 		http.get('http://m.maizuo.com/v4/api/cinema?__t='+time,function(response){
   			var data='';
   			response.on('data',function(chunk){
   					data+=chunk;
   			})
   			response.on('end',function(){
   					res.send(data);
   			})
   		})
});


module.exports = router;
