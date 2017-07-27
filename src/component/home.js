import React, { Component } from 'react';
import Lunbo from './lunbo.js';
import Now from './now.js';
import Will from './will.js';
import Top from './top.js';
import {connect} from 'react-redux';

class Homes extends Component{
	render(){
		return (
			<div id="home" className="Home">
				<Lunbo/>
				<Now/>
				<Will/>
				<Top/>
			</div>
		)
	}
	componentDidMount(){
		this.props.home();
	}
}

var Home=connect(
	function(state,ownProps){
		return{
			
		}
	},
	function(dispatch,ownProps){
		return{
			home:function(){
				dispatch({
					type:"CHANGE_TITLE",
					title:"卖座电影"
				})
			}
		}
	}
)(Homes)

export default Home;