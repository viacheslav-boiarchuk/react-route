import 'babel-polyfill'
import { render } from 'react-dom'
import './styles.scss';
import store from './store/';
import { Provider } from 'react-redux';
import React from 'react'
import App from './components/App/'

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
