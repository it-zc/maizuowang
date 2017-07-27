import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';


class Wills extends Component{
	render(){
		return(
			<div className="Will">
				<div className="circulation">
				
					{
						this.props.willArr.map(function(item,index){
							return(
								<dl key={index}>
									<dt><img  src={item.cover.origin} /> </dt>
									<dd>
										<div className="nowdiv">
											<p className="pname">{item.name}</p>
											<p className="pintro">{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
										</div>
										<h4>{item.grade}</h4>
									</dd>
								</dl>
							)
							
						})
					}
					
				</div>
				<button className="nowhot">更多即将上映电影</button>
			</div>
		)
	}
	componentDidMount(){
		var that=this;
		$.get('http://localhost:8080/will',function(res){
			var willArr=JSON.parse(res).data.films;
			that.props.will(willArr);
		})
	}
}

var Will=connect(
	function(state,ownProps){
		return{
			willArr:state.willArr
		}
	},
	function(dispatch,ownProps){
		return{
			will:function(willArr){
				dispatch({
					type:"WILL_ARR",
					willArr:willArr
				})
			}
		}
	}
)(Wills)

export default Will;