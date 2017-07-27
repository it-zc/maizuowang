import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';


class Regs extends Component{
	render(){
		return(
			<div className="Reg" id="reg">
				<div className="inp">
						<input type="text" placeholder="输入手机号/邮箱" ref="user"/>
						<div className="frame1"></div>
						<input type="password" placeholder="输入密码/验证码" className="inp2" ref="opassword"/>
						<div className="frame2"></div>
						<p ref="text"></p>
						<button onClick={this.regular.bind(this)}>登录</button>
						
				</div>
			</div>
		)
	}
	regular(){
		
		var user=this.refs.user.value;

		var opassword=this.refs.opassword.value;
		
		var text=this.refs.text;
			 if (/^\s*$/g.test(user)) {
	           text.innerHTML='账号为空';
	        }else if(/^\s*$/g.test(opassword)){
	            text.innerHTML='密码为空';
	        }else if (!/(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(user)) {
	            text.innerHTML='邮箱或者手机号码错误';
	        }else{
	        	$.get('http://localhost:8080/users/register?user='+user+'&password='+opassword,function(res){
//				console.log(res);
					if(res=="登陆成功"){
						window.location.href="http://localhost:3000/#/own";
					}
				})
	        }

	}
	
	componentDidMount(){
		this.props.home();
	}
}


var Reg=connect(
	function(state,ownProps){
		return{
			
		}
	},
	function(dispatch,ownProps){
		return{
			home:function(){
				dispatch({
					type:"CHANGE_TITLE",
					title:"登录"
				})
			}
		}
	}
)(Regs);

export default Reg;