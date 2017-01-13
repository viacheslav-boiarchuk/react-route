import React, { Component } from 'react'
import './styles.scss';

class Loader extends Component {
	render() {
		return (
			<div>
				{(this.props.loaderState) ? <div className='loader-container'>
					<h1>Please wait. Data is loading.</h1>
				</div> : null}
			</div>
		)
	}
}

export default Loader;