import "./CategoriesList.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import filterActions from "./../../../actionCreators/filterActions.js";
import outputActions from "./../../../actionCreators/outputActions.js";

const CategoriesList = ({ raw_categories }) => {
	let [categories_list, setCategories] = useState(raw_categories);
	const dispatch = useDispatch();

	const categoryCliked = (category_id) => {
		let updated_categories = categories_list.map((x) =>
			x._id === category_id ? { ...x, selected: !x.selected } : x
		);
		setCategories(updated_categories);

		let active_categories = updated_categories.filter((x) => x.selected);
		dispatch(
			filterActions.setCategory(active_categories.map((x) => x.name))
		);
		dispatch(
			outputActions.setOutputCatgeory(
				active_categories.map((x) => {
					return { _id: x._id, name: x.name };
				})
			)
		);
	};

	// eslint-disable-next-line
	useEffect(() => {categoryCliked(categories_list[0]._id); }, []);

	return (
		<div className="category-list-main">
			<div className="category-list-heading">
				<h4> Categories you sell </h4>
			</div>
			<div className="category-list-options">
				<ul>
					{categories_list.map((x) => (
						<li
							className={x.selected ? "category-active" : ""}
							key={x._id}
							onClick={() => categoryCliked(x._id)}
						>
							{x.selected ? "-" : "+"} {x.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CategoriesList;
