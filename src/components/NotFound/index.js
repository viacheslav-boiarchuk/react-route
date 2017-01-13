import React, { Component } from 'react'
import NavLink from '../NavLink'
import './styles.scss'

export default class NotFound extends Component {
	render() {
		return (
			<div className='empty-container'>
				<p> Страница не найдена. Вернуться на <NavLink  onlyActiveOnIndex={true} to='/'>главную</NavLink>?</p>
			</div>
		)
	}
}
