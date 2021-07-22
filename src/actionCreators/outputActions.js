const outputActions = {
	setOutputTarget: (taget_data) => {
		return {
			type: "SET_OUTPUT_TARGET",
			data: taget_data
		}
	},
	setOutputCatgeory: (category_data) => {

		category_data = category_data.map( (x) => { return {...x, angles: [], croppings: [] }});

		return {
			type: "SET_OUTPUT_CATEGORY",
			data: category_data
		}
	},

	addCategoryData: (angels_data) => {
		return {
			type: "ADD_CATEGORY_DATA",
			data: angels_data
		}
	},

	removeCategoryData: (angels_data) => {
		return {
			type: "REMOVE_CATEGORY_DATA",
			data: angels_data
		}
	},


	setOutputOptions: (options_data) => {
		return {
			type: "SET_OUTPUT_OPTIONS",
			data: options_data
		}
	},
}

export default outputActions;