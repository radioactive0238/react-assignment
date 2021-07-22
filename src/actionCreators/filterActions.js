const filterActions = {
	setTarget: (target_list) => {
		return {
			type: "SET_TARGET",
			data: target_list
		}
	},

	setCategory: (category_list) => {
		return {
			type: "SET_CATEGORY",
			data: category_list
		}
	},
}

export default filterActions;