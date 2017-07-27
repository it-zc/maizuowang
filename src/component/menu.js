import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Menus extends Component {
  
  render() {
    return (
    		<div id="menu" className="Menu">
    				<ul>
    					<Link to='/'>
		    					<li onClick={this.props.add}>
		    							首页<i className="iconfont icon-arrow-right right"></i>
		    					</li>
    					</Link>
    					<Link to='/movie/hot'>
		    					<li onClick={this.props.add}>
		    							影片 <i className="iconfont icon-arrow-right right"></i> 
		    					</li>
    					</Link>
    					<Link to='/cinema'>
		    					<li onClick={this.props.add}>
		    							影院 <i className="iconfont icon-arrow-right right"></i> 
		    					</li>
    					</Link>
    					<Link to='/'>
		    					<li onClick={this.props.add}>
		    							商城 <i className="iconfont icon-arrow-right right"></i> 
		    					</li>
    					</Link>
    					<Link to='/'>
		    					<li onClick={this.props.add}>
		    							演出 <i className="iconfont icon-arrow-right right"></i> 
		    					</li>
    					</Link>
    					<Link to='/'>
		    					<li onClick={this.props.add}>
		    							我的 <i className="iconfont icon-arrow-right right"></i> 
		    					</li>
    					</Link>
    					<Link to='/'>
		    					<li onClick={this.props.add}>
		    							卖座卡 <i className="iconfont icon-arrow-right right"></i> 
		    					</li>
    					</Link>
    				</ul>
    		</div>
    )
  }
}

var Menu=connect(
	function(state,ownProps){
			return{
				isShowChild:state.isShowChild
			}
	},
	function(dispatch,ownProps){
		return{
			add:function(){
				dispatch({
					type:"CHANGE_MENU",
				})
			}
		}
	}
)(Menus)


export default Menu;