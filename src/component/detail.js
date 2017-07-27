import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

class Details extends Component{
	constructor(props) {
        super(props);
		console.log(props);
        this.state={id:props.match.params.id}
    }
	render(){
						
						var month=new Date(this.props.detailobj.premiereAt).getMonth()+1;
						var day=new Date(this.props.detailobj.premiereAt).getDate();
		
		return(
			<div className="Detail">
				<div className="details">
					{
						
						<div>
							<img src={this.props.detailobj.origin} />
							<div className="p1">影片简介</div>
							<div className="dtxt">
								<p><span>导       演:</span><span>{this.props.detailobj.director}</span></p>
								<p>
									<span>主       演:</span>
									{
										this.props.actors.map(function(item,index){
											return(
												<span key={index}>{item.name}|</span>
											)
											
										})
									}
								</p>
								<p><span>地区语言:</span><span>{this.props.detailobj.nation}</span><span>({this.props.detailobj.language})</span></p>
								<p><span>类型:</span><span>{this.props.detailobj.category}</span></p>
								<p><span>上映日期:</span><span>{month}月{day}日上映</span></p>
								<p>{this.props.detailobj.synopsis}</p>
							</div>
						</div>
					}
					<button>立即购票</button>
				</div>
			</div>
		)
	}
	componentDidMount(){

		var that=this;
		var id=this.state.id;
		$.get('http://localhost:8080/detail?id='+id,function(res){

			var detailobj=JSON.parse(res).data.film;
			
			that.props.detail(detailobj);
		})
	}
}

var Detail=connect(
	function(state,ownProps){
		return{
			detailobj:state.detailobj,
			actors:state.actors
			
		}
	},
	function(dispatch,ownProps){
		return{
			detail:function(detailobj){
				dispatch({
					type:"DETAIL",
					detailobj:detailobj
				})
			}
		}
	}
)(Details);

export default Detail;


