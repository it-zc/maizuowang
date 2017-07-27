import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class Owns extends Component{
	render(){
		return(
			<div className="Own" id="own">
				<div>
					<div className="top">
						<dl>
							<dt>
								<img src="https://pic.maizuo.com/usr/default/maizuomoren66.jpg" />
							</dt>
							<dd>
								<p>手机用户</p>
								<p>ID:23459527</p>
								<p>退出</p>
							</dd>
						</dl>
					</div>
					<ul>
						<li><span>影票订单</span><span>0张</span></li>
						<li><span>影票代付订单</span><span>0张</span></li>
						<li>商城订单</li>
						<li>演出订单</li>
						<li><span>我的现金券</span><span>0张</span></li>
						<li><span>账户余额</span><span>0元</span></li>
						<li><span>我的卖座卡</span><span>0张</span></li>
						<li>设置</li>
					</ul>
				</div>
			</div>
		)
	}
	componentDidMount(){
		
	}
}

var Own=connect(
	function(state,ownProps){
		return{
			
		}
	},
	function(dispatch,ownProps){
		return{
			
		}
	}
)(Owns)

export default Own