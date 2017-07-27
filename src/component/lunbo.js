import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import $ from 'jquery';
import {connect} from 'react-redux';

class Lunbos extends Component{
	render(){
		return (
			<div id="lunbo" className="Lunbo">
				<Carousel
		          className="my-carousel"
		          autoplay={true}
		          infinite={true}
		          selectedIndex={0}
		          swipeSpeed={35}
		          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		          afterChange={index => console.log('slide to', index)}
		        >
		        	{
			        	this.props.lunArr.map(function(item,index){
			        		
			        		return (
			        			<img src={item.imageUrl} key={index} />
			        		)
			        		
			        	})
		        	
			     	}  
		        </Carousel>
			</div>
			
				
		)
	}
	componentDidMount(){
		var that=this;
		$.get('http://localhost:8080/lunbo',function(res){
			
			var lunArr=JSON.parse(res).data.billboards;
			
			that.props.take(lunArr);
		})
	}
}
var Lunbo=connect(
	function(state,ownProps){
		return{
			lunArr:state.lunArr
		}
	},
	function(dispatch,ownProps){
		return{
			take:function(lunArr){
				dispatch({
					type:"LUN_ARR",
					lunArr:lunArr
				})
			}
		}
	}
)(Lunbos)

export default Lunbo;