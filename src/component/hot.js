import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
var page=1;
var flang=true;
class Hots extends Component{
	
	render(){
			
		return (
			<div className="Hot" ref="top">
				{
					this.props.oldArr.map(function(item,index){
						return(
							<div className="lfilm" key={index}>
								<img src={item.poster.thumbnail} />
								<div className="ltxt">
									<p><span>{item.name}</span><span>{item.grade}<i className="iconfont icon-arrow-right film-next-icon"></i></span></p>
									<p>{item.intro}</p>
									<p><span>{item.cinemaCount}家影院上映</span><span>{item.watchCount}人购票</span></p>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
	componentDidMount(){
	
		var that=this;
		 window.addEventListener("scroll",this.load.bind(this)) 
		 	// 变量t就是滚动条滚动时，到顶部的距离
//		 	 const t = document.documentElement.scrollTop || document.body.scrollTop;
//		 	 var client=document.body.clientHeigth;
//		 	 if(t+client>$(this.refs.top).height()){
//		 	 	this.load();
		 	 
		 
		 	$.get('http://localhost:8080/hoting?page='+page+'&count=7',function(res){
				
				var hotingArr=JSON.parse(res).data.films;
				console.log(hotingArr);
				that.props.hoting(hotingArr);
				page++;
			})	
			
	}
	load(){
			var that=this;
			var  t = document.documentElement.scrollTop || document.body.scrollTop;
//			console.log(t);
		 	var  client=document.documentElement.clientHeight;
				if(t+client>$(this.refs.top).height()&&flang){
					
					console.log('============================');
					$.get('http://localhost:8080/hoting?page='+page+'&count=7',function(res){
						var hotingArr=JSON.parse(res).data.films;
//						console.log(hotingArr);
//						var hotingArr=[];
						if(hotingArr.length>0){
							 
							 that.props.hoting(hotingArr);
								page++;
						}	

						
						
						
						flang=true;
					})
					flang=false;
				}
				
	}
	componentWillUnmount(){
		page=1;
	}
}

var Hot=connect(
	function(state,ownProps){
		return{
			oldArr:state.hotingArr
		}
	},
	function(dispatch,ownProps){
		return{
			hoting:function(hotingArr){
				dispatch({
					type:"HOTING_ARR",
					hotingArr:hotingArr
				})
			}
		}
	}
)(Hots)

export default Hot;