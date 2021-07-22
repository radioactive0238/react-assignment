const default_state = {
	targets: [],
	categories: {},
	options: {
		alignment: [],
		margin: {
			top: '',
			left: '',
			right: '',
			bottom: ''
		},
		resolution: ''
	}
};

const outputReducer = (state=default_state, action) => {
	switch(action.type){
		case "SET_OUTPUT_TARGET":
			return {...state, targets: action.data};

		case "SET_OUTPUT_CATEGORY":
			return {...state, categories: action.data};

		case "ADD_CATEGORY_DATA":
			let cat_add_state = {...state};
			for(let i=0; i<cat_add_state['categories'].length; i++){
				if(cat_add_state['categories'][i]._id===action.data.cat_id){
					cat_add_state['categories'][i][action.data.opt_type] = cat_add_state['categories'][i][action.data.opt_type].concat(action.data.opt_name);
				}
			}
			return cat_add_state;

		case "REMOVE_CATEGORY_DATA":
			let cat_remove_state = {...state};
			for(let i=0; i<cat_remove_state['categories'].length; i++){
				if(cat_remove_state['categories'][i]._id===action.data.cat_id){
					cat_remove_state['categories'][i][action.data.opt_type] = cat_remove_state['categories'][i][action.data.opt_type].filter(x=> x!==action.data.opt_name);
				}
			}
			return cat_remove_state;

		case "SET_OUTPUT_OPTIONS":
			let opt_state = {...state};
			
			if(action.data.opt_name==='alignment'){
				if(opt_state['options']['alignment'].includes(action.data.opt_data)){
					opt_state['options']['alignment'] = opt_state['options']['alignment'].filter(x=>x!==action.data.opt_data)
				} else{
					opt_state['options']['alignment'].push(action.data.opt_data);
				}
			}

			if(action.data.opt_name==='margin'){
				opt_state['options']['margin'][action.data.opt_type] = action.data.opt_data;
			}

			if(action.data.opt_name==='resolution'){
				opt_state['options']['resolution'] = action.data.opt_data;
			}

			return opt_state;

		default:
			return state;
	}
}

export default outputReducer;