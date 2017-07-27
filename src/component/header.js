import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './menu.js';

class Headers extends Component{
	render(){
		return(
			<Router>	
			<div className="Header" id="header">
				<div className="left" onClick={this.props.hide}>
					<i className="iconfont icon-list"></i>
					<span className="maizuo">{this.props.title}</span>
				</div>
				<div className="right">
					<p className="fixed">
						<span>深圳</span>
						<i className="iconfont icon-dropdown"></i>
					</p>
					<Link to="/register">
						<div className="user">
							<i className="iconfont icon-user "></i>
						</div>
					</Link>
				</div>
			</div>
			</Router>
		)
	}
}

var Header=connect(
	
	function(state,ownProps){
            return {
            	title:state.title,
                isShowChild:state.isShowChild
            }
       },
       
	function(dispatch,ownProps){
		return{
			hide:function(){
				dispatch({
					type:"CHANGE_MENU",
				})
			}
		}
	}
)(Headers)


export default Header;