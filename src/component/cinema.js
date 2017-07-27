import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import { Accordion, List } from 'antd-mobile';
import Top from './top.js';

class Cinemas extends Component{
	render(){
		
		var objArr=this.props.cinemaArr;
		
//		var arr = [1,2,3,4,6,6,2];		
//		var setObj = new Set(arr);
//		var newArr = new Array(...setObj);
//		console.log(newArr);

		var nameArr=[];
		
		this.props.cinemaArr.map(function(item,index){
			return(
				nameArr.push(item.district.name)
			)
		})
		var setArr=new Set(nameArr);
		var newArr = new Array(...setArr);
		console.log(newArr)
		
		
		return (
			<div className="Cinema" id="cinema">
				 <div>
				  
			        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
			        	{
			        		newArr.map(function(item,index){
			        			var yinyuan=[];
			        				objArr.map(function(items,index){
		        							if(item==items.district.name){
		        								yinyuan.push(items)
		        							}			
			        					})
			        			console.log(yinyuan)
			        			return(
			        				<Accordion.Panel header={item} className="accordion" key={index}>
			        					{
			        						yinyuan.map(function(itemss,index){
			        							return(
			        								<ul className="wrap" key={index}>
									            		<li>
									            			<div>
											            		<span>{itemss.name}</span>
											            		<i className="iconfont icon-zuo book"></i>
											            		<i className="iconfont icon-tong ticket"></i>
										            		</div>
										            		<i className="iconfont icon-arrow-right book"></i>
									            		</li>
									            		<li><span className="coke">可乐爆米花</span><span className="act">优惠活动</span></li>
									            		<li>{itemss.address}</li>
									            		<li><span>距离</span><span>未知</span></li>
									            	</ul>
			        							)
			        							
			        						})
			        					}	
							        </Accordion.Panel>
			        			)
			        		})
			        	}
			        </Accordion>
			        
			      </div>
							<Top/>	
			</div>
		)
	}
	componentDidMount(){
		var that=this;
		$.get('http://localhost:8080/cinema',function(res){
			var cinemaArr=JSON.parse(res).data.cinemas;
			console.log(cinemaArr)
			that.props.cinema(cinemaArr);
		})
	}
}

var Cinema=connect(
	function(state,ownProps){
		return{
			cinemaArr:state.cinemaArr
		}
	},
	function(dispatch,ownProps){
		return{
			cinema:function(cinemaArr){
				dispatch({
					type:"CINEMA",
					cinemaArr:cinemaArr,
					title:"全部影院"
				})
			}
		}
	}
)(Cinemas)

export default Cinema;


