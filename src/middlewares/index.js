import {GET_DATA, ENABLE_LOADER} from '../actions/';
import Promise from 'es6-promise';
import {ADD_DATA} from '../actions/';
import {temporary_data} from '../temporaryData/';
import {resources} from '../resources/';

let resourceDataArray = {
	pages: {}
};

function getData(url) {
	return fetch(url).then(data => data.json()).then(data => {
		return (resourceDataArray.pages[data.Title] = {
			tabs: {
				tab1: {
					Plot: data.Plot,
					Actors: data.Actors,
					Country: data.Country
				},
				tab2: {
					Genre: data.Genre,
					Released: data.Released,
					Writer: data.Writer
				},
				tab3: {
					Year: data.Year,
					imdbRating: data.imdbRating,
					imdbID: data.imdbID
				}
			}
		});
	});
}

const getDataMiddleWare = store => next => {
	return action => {
		switch (action.type) {
			case GET_DATA:
				store.dispatch({
					type: ENABLE_LOADER
				});

			Promise.all(resources.map(getData)).then(
					() => {
						return store.dispatch({
							type: ADD_DATA,
							data: resourceDataArray
						});
					},
					() => {
						return store.dispatch({
							type: ADD_DATA,
							data: temporary_data
						});
					}
				);
				return next(action);
			default:
				return next(action);
		}
	};
};

export default getDataMiddleWare;