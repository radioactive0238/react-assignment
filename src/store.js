import { createStore, combineReducers } from 'redux';

import filterReducer from './reducers/filterReducer.js'
import outputReducer from './reducers/outputReducer.js';

const reducer = combineReducers({
	filters: filterReducer,
	output: outputReducer
});

const store = createStore(reducer);

export default store;