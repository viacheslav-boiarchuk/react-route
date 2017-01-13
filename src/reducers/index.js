import {ENABLE_LOADER, ADD_DATA} from '../actions/';

const initialState = {
	sourceData: null,
	loader: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ENABLE_LOADER:
			return {
				...state,
				loader:true
			};
		case ADD_DATA:
			return {
				...state,
				loader: false,
				sourceData: action.data
			};
		default:
			return {...state}
	}
}