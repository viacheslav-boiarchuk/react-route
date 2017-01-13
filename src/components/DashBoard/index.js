import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavLink from '../NavLink/';

class DashBoard extends Component {

	render() {
		const pageData = this.props.dashboard.sourceData;
		return (
			<div className='container'>
				<ul className='navigation'>
					{Object.keys(pageData.pages).map((item, i) => {
						return <li key={i}><NavLink to={'/' + item}>{item}</NavLink></li>
					})}
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export default connect(
	state => {
		return {
			dashboard: state.dashboard
		}
	},
	{}
)(DashBoard);