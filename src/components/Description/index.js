import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavLink from '../NavLink/';

class Description extends Component {

	constructor() {
		super()
	}

	static checkValidParam = (store) => {
		return (location, replaceWith) => {
			if (location.params.page !== '404' && store.pages[location.params.page].tabs[location.params.selected_tab] === undefined) {
				replaceWith('/404')
			}
		}
	};

	render() {
		const param = this.props.params;
		const data = this.props.dashboard.sourceData.pages[param.page].tabs[param.selected_tab];
		return (
			<div id='accordion' ref='accordion'>
				{Object.keys(data).map((keyName, keyIndex) => {
						return (
							<div key={keyName+keyIndex} className='accordion-panel'>
								<NavLink to={'/' + param.page + '/' + param.selected_tab + '/collapse='+keyIndex} >{keyName}</NavLink>
								{this.props.children}
							</div>
						)
					}
				)}
			</div>
		)
	}
}

export default connect(
	state => {
		return {
			dashboard: state.dashboard
		}
	},
	{}
)(Description);
