import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Tab extends Component{
	render(){
		return (
				<div className="tab">
					<ul>
						<li>
							<NavLink activeClassName="hightlight1" to="/movie/hot">正在上映</NavLink>
						</li>
						<li>
							<NavLink activeClassName="hightlight2" to="/movie/comming">即将上映</NavLink>
						</li>
					</ul>
				</div>
		)
	}
}


export default Tab;