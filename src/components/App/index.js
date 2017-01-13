import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getDashboardData} from '../../actionCreators/';
import Loader from '../../components/Loader/';
import { Router, Redirect, browserHistory, Route, IndexRoute } from 'react-router';
import DashBoard from '../DashBoard/';
import NotFound from '../NotFound/';
import Home from '../Home/';
import Page from '../Page/';
import Description from '../Description/';
import AccordionContent from '../AccordionContent/';

class App extends Component {

	componentWillMount(){
		this.props.getDashboardData();
	}

	render() {
		const pageData = this.props.dashboard.sourceData;
		const loader = this.props.dashboard.loader;
		return (
			<div>
				{ pageData !== null ?
					<Router history={browserHistory} routes={
						<div>
							<Route path='404' component={NotFound}/>
							<Route path='/' component={DashBoard} >
								<IndexRoute component={Home} />
								<Redirect from=':page' to=':page/tab1' />
								<Route path=':page' component={Page} onEnter={Page.checkValidParam(pageData)}>
									<Route path=':selected_tab'  component={Description} onEnter={Description.checkValidParam(pageData)}>
										<Route path=':collapse=:id'  component={AccordionContent} onEnter={AccordionContent.checkValidParam(pageData)} />
									</Route>
								</Route>
							</Route>
							<Route path='*' component={NotFound}/>
						</div>
					}/>
					: <Loader loaderState={loader} />}
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
	{getDashboardData}
)(App);