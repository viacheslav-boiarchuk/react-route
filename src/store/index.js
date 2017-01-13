import {createStore, combineReducers, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import getDataMiddleWare from '../middlewares/';
import dashboard from '../reducers/';

const reducer = combineReducers({
	dashboard
});

const store = createStore(reducer, applyMiddleware(
	getDataMiddleWare, loggerMiddleware()
));

export default store;