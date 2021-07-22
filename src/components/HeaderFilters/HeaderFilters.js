import './HeaderFilters.css';

import CategoriesList from './CategoriesList/CategoriesList.js';
import TargetsList from './TargetsList/TargetsList.js';


const HeaderFilters = ({ raw_targets, raw_categories }) => {
	const all_radio_item = {_id: "all_radio_items", name: "all"}

	raw_targets.unshift(all_radio_item);
	raw_categories = raw_categories.map((x)=> { return {...x, selected: false}});
	
	return(
		<div>
			<TargetsList raw_targets={raw_targets} />
			<CategoriesList raw_categories={raw_categories} />
		</div>
	)
}

export default HeaderFilters;