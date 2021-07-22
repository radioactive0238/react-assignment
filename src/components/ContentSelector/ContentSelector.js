import './ContentSelector.css'

import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import CategorySelector from './CategorySelector/CategorySelector.js';
import AlignmentSelector from './AlignmentSelector/AlignmentSelector.js';


const ContentSelector = ({ raw_target_data }) => {
	let [data_obj, setDataObj] = useState(null);
	const filters = useSelector(state => state.filters);

	const updateData = () => {
		if(filters.targets.length===0 || filters.categories.length===0){
			return;
		}

		// Filter Data by target selected
		let targets_filtered = raw_target_data.filter(x=> filters.targets.includes(x.name) );

		let temp_data_obj = {
			'cropping': [],
			'angles': []
		};


		for(let i=0; i<targets_filtered.length; i++){
		
			// Filter Angles & cropping based on Category
			let temp_angles = targets_filtered[i].properties.angle.filter(x=> filters.categories.includes(x.category))
			let temp_cropping = targets_filtered[i].properties.cropping.filter(x=> filters.categories.includes(x.category))


			temp_data_obj.angles.push(...temp_angles)
			temp_data_obj.cropping.push(...temp_cropping);

		}

		setDataObj(temp_data_obj);

	}

	useEffect(updateData, [raw_target_data, filters]);


	return(
		<>
		{!data_obj &&
			<h3> Select target and categories first </h3>
		}
		{ data_obj &&
			<div>
				<CategorySelector  type="angles" text_heading={"Angles Required"} data_list={data_obj.angles}  />
				<CategorySelector  type="croppings" text_heading={"Cropping & Alignment"} data_list={data_obj.cropping}  />
				<AlignmentSelector />
			</div>
		}
		</>
	)
}

export default ContentSelector