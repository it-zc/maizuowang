import React, { Component } from 'react';
import Header from './component/header.js';
import Lunbo from './component/lunbo.js';
import Menu from './component/menu.js';
import Home from './component/home.js';
import Movie from './component/movie.js';
import Cinema from './component/cinema.js';
import Detail from './component/detail.js';
import Reg from './component/register.js';
import Own from './component/own.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import {connect} from 'react-redux';

import ReactANI from 'react-addons-css-transition-group';

class Apps extends Component {
  render() {	
    return (
      <div className="App">
       		<Header/>
       		
       		<Router>
       			<div>
       					<ReactANI transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
			       		{ this.props.isShowChild ? <Menu />: ''  }
			       		</ReactANI>
			       		
       					<Route exact path="/" component={Home}/> 
       					<Route path="/detail/:id" component={Detail} />
       					<Route path="/movie" component={Movie}/>  
       					<Route path="/cinema" component={Cinema}/> 
       					<Route path="/register" component={Reg}/> 
       					<Route path="/own" component={Own}/> 
			       		
       			</div>
       		</Router>
      </div>
    );
  }
}

var App = connect(
        function(state,ownProps){
            return {
                isShowChild:state.isShowChild
            }
        }
    )(Apps);

export default App;
