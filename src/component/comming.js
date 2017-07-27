import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class Commings extends Component{
	render(){
		return (
			<div className="Comming">
				{
					this.props.commingArr.map(function(item,index){
							var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
							var data=new Date(item.premiereAt).getDay();
							var day=new Date(item.premiereAt).getDate();
							var month=new Date(item.premiereAt).getMonth()+1;
						return(
							
							<div className="lfilm" key={index}>
								<img src={item.poster.thumbnail} />
								<div className="ltxt">
									<p><span>{item.name}</span><span>{item.grade}<i className="iconfont icon-arrow-right film-next-icon"></i></span></p>
									<p>{item.intro}</p>
									<p><span className="month">{month}月{day}日</span><span className="week">{week[data]}</span></p>
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
		$.get('http://localhost:8080/comming?page=1&count=7',function(res){
				
				var commingArr=JSON.parse(res).data.films;
				console.log(commingArr);
				that.props.comming(commingArr);
		})
	}
}


var Comming=connect(
	function(state,ownProps){
		return{
			commingArr:state.commingArr
		}
	},
	function(dispatch,ownProps){
		return{
			comming:function(commingArr){
				dispatch({
					type:"COMMING_ARR",
					commingArr:commingArr
				})
			}
		}
	}
)(Commings)

export default Comming;