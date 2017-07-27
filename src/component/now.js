import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import { HashRouter as Router, Route,Link } from 'react-router-dom';
import Detail from './detail.js';

class Nows extends Component{
	render(){
		return(
			<div className="Now">
				<div className="circulation">
				
					{
						this.props.nowArr.map(function(item,index){
							var id='/detail/'+item.id;
							return(
								<Router key={index}>
									<div >
										<Link to={id} >
											<dl>
												<dt><img  src={item.cover.origin} /> </dt>
												<dd>
													<div className="nowdiv">
														<p className="pname">{item.name}</p>
														<p className="pintro">{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
													</div>
													<h4>{item.grade}</h4>
												</dd>
											</dl>
										</Link>
										
									</div>
								</Router>
							)
							
						})
					}
					
				</div>
				<button className="nowhot">更多热映电影</button>
				<div className="linear"></div>
				<p className="hr">即将上映</p>
			</div>
		)
	}
	componentDidMount(){
		var that=this;
		$.get('http://localhost:8080/nowhot',function(res){
			var nowArr=JSON.parse(res).data.films;
			that.props.now(nowArr);
		})
	}
}

var Now=connect(
	function(state,ownProps){
		return{
			nowArr:state.nowArr
		}
	},
	function(dispatch,ownProps){
		return{
			now:function(nowArr){
				dispatch({
					type:"NOW_ARR",
					nowArr:nowArr
				})
			}
		}
	}
)(Nows)

export default Now;