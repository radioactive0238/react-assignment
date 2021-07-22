const default_state = {
	targets: [],
	categories: []
};


const filterReducer = (state=default_state, action) => {
	switch(action.type){
		case "SET_TARGET":
			return {...state, targets: action.data};
		case "SET_CATEGORY":
			return {...state, categories: action.data }
		default:
			return state;
	}
}

export default filterReducer;