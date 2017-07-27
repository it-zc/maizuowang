import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Hot from "./hot.js";
import Comming from "./comming.js";
import Tab from "./tab.js";
import {connect} from 'react-redux';
import Top from './top.js';


class Movies extends Component{
	render(){
		return (
			
			<div id="movie" className="Movie">
				<Router>
					<div className="film">
						<Tab/>
						<Route exact path="/movie/hot" component={Hot} />
						<Route path="/movie/comming" component={Comming} />
					</div>
				</Router>
				<Top/>
			</div>
			
		)
	}
	componentDidMount(){
		this.props.home();
	}
}

var Movie=connect(
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
)(Movies);

export default Movie;