import React, { Component } from 'react';
import {connect} from 'react-redux';

class Tops extends Component{
	render(){
		return(
			<div className="Top">
				<div id="top_view" onClick={this.scrollToTop}>
					<i className="iconfont icon-top"></i>
				</div>
			</div>
		)
	}
	componentDidMount() {
        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const top_view = document.getElementById('top_view');
            if (top_view !== null) {
                top_view.style.display = t >= 400 ? 'block' : 'none';
            }
        };
    }
	scrollToTop(){
        window.scrollTo(0, 0);
    }
}

var Top=connect(
	function(state,ownProps){
		return{
			
		}
	},
	function(dispatch,ownProps){
		return{
			
		}
	}
)(Tops)

export default Top;