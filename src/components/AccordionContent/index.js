import React, { Component } from 'react';
import {connect} from 'react-redux';

class AccordionContent extends Component {

	static checkValidParam = (store) => {
		return (location, replaceWith) => {
			const obj = store.pages[location.params.page].tabs[location.params.selected_tab];
			if (location.params.page !== '404' && Object.keys(obj).length < location.params.id) {
				replaceWith('/404')
			}
		}
	};

	render() {
		const param = this.props.params;
		const currentObj = this.props.dashboard.sourceData.pages[param.page].tabs[param.selected_tab];
		return (
			<div className='accordion-content-container'>
				{Object.keys(currentObj).map((keyName, keyIndex) => {
					if (keyIndex == this.props.params.id) {
						return (
							<div>
								{currentObj[keyName]}
							</div>
						)
					}}
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
)(AccordionContent);