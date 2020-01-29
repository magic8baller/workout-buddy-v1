import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import history from 'utils/history';
import {themeReducer} from 'redux/ducks'
export default function createReducer () {
	const rootReducer = combineReducers({
		router: connectRouter(history),
		theme: themeReducer,
		test: () => 'hello'
	});

	return rootReducer;
}