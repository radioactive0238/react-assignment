import './TargetsList.css';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import filterActions from './../../../actionCreators/filterActions.js';
import outputActions from './../../../actionCreators/outputActions.js'

const RadioListItem = ({ item_id, item_name,  selected, updateTarget}) => {

	const prepareName = (name_str) => {
		return (name_str.slice(0,1).toUpperCase() + name_str.slice(1));
	}

	return(
		<div className="filter-option-item" >
			<input type="radio" name="target_radio" value={item_name}  checked={item_name === selected} onChange={()=>updateTarget(item_name, item_id)} />
			<label htmlFor={item_name}>{prepareName(item_name)}</label>
		</div>
	)
}
	

const TargetsList = ({ raw_targets }) => {
	let [selected, setSelected] = useState()
	const dispatch = useDispatch();
	
	const updateTarget = (target_name, target_id) => {
		setSelected(target_name);
		let filter_values = target_name==='all' ? raw_targets[1].name : [target_name];
		let output_values = target_name==='all' ? raw_targets.map((x)=>{ return { _id: x._id, name: x.name }}) : [{_id: target_id, name:  target_name}] ;
		dispatch(filterActions.setTarget(filter_values));
		dispatch(outputActions.setOutputTarget(output_values))
	}

	// eslint-disable-next-line
	useEffect(()=>{updateTarget(raw_targets[0].name, raw_targets[0]._id) },[raw_targets]);

	return(
		<div className="filter-list-main">
			<div className="filter-list-options">
				{ raw_targets.map(x=> <RadioListItem key={x._id} item_id={x._id} item_name={x.name}  selected={selected} updateTarget={updateTarget}/> )}

			</div>
		</div>
	)
}

export default TargetsList;