import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavLink from '../NavLink/';

class Page extends Component {

	constructor(props) {
		super(props);
	}

	static checkValidParam = (store) => {
		return (location, replaceWith) => {
			if (location.params.page !== '404' && store.pages[location.params.page] === undefined) {
				replaceWith('/404')
			}
		}
	};

	render() {

		const data = this.props.dashboard.sourceData.pages[this.props.params.page];
		return (
			<div className='content-container'>
				<ul className='nav nav-tabs'>
					{Object.keys(data.tabs).map((keyName, keyIndex) => {
							return <li key={keyName+keyIndex}><NavLink to={'/' + this.props.params.page + '/' + keyName}>{keyName}</NavLink></li>
						}
					)}
				</ul>
				{this.props.children}
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
)(Page);


//class Page extends Component {
//
//	constructor() {
//		super();
//	}
//
//	render() {
//		const data = this.props.dashboard.sourceData.pages[this.props.route.path];
//		return (
//				<div className='content-container'>
//					{data !== undefined ?
//							<div className='page-information'>
//								<ul className='nav nav-tabs'>
//									{Object.keys(data.tabs).map((keyName, keyIndex) => {
//												return <li key={keyName+keyIndex}><NavLink to={'/' + this.props.route.path + '/' + keyName}>{keyName}</NavLink></li>
//											}
//									)}
//								</ul>
//								{this.props.children}
//							</div>
//							: <p className='failed-data'>Sorry some problem with data</p>
//					}
//				</div>
//		)
//	}
//}