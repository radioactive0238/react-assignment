import './CategorySelector.css'

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import outputActions from './../../../actionCreators/outputActions.js'


const HeadingListItem = ({ _id, is_active, name, categoryChanged}) => {
	return(
		<li className={ is_active ? "category_selector-nav-active" : "" } onClick={()=>categoryChanged(_id)} >
			{name}
		</li>
	)
}

const ImageListItem = ({ name, image_url, selectItem}) => {
	let [checked, setChecked] = useState(false);

	const checkboxClicked = () => {
		setChecked(!checked);
		selectItem(name, !checked);
	}

	return(
		<li >
			<div className="category-image-item">
				<div className="category-image-src">
					<img alt={name} src={image_url} />
					<div>
						<input name={name} type="checkbox" checked={checked} onChange={ checkboxClicked } />
					</div>
				</div>
				<div className="category-image-text">
					<span> {name} </span>
				</div>
			</div>
		</li>
	)
}

const CategorySelector = ({ type, text_heading, data_list }) => {

	let [category_selected, setCategory] = useState(data_list[0]._id);
	let [data_selected, setData] = useState(null);
	const dispatch = useDispatch();


	const categoryChanged = (cat_id) => {
		setCategory(cat_id);
		setData(data_list.filter(x=>x._id===cat_id)[0]);
	}

	const selectItem = (item_name, item_value) => {
		if(item_value){
			dispatch(outputActions.addCategoryData({cat_id: category_selected, opt_type: type, opt_name: item_name }));
		} else {
			dispatch(outputActions.removeCategoryData({cat_id: category_selected, opt_type: type, opt_name: item_name }));
		}
	}

	// eslint-disable-next-line
	useEffect(()=> categoryChanged(data_list[0]._id) ,[data_list]);

	return(
		<div className="category_selector-list-main">
			<div className="category_selector-list-heading">
				<h3> {text_heading} </h3>
			</div>
			<div className="category_selector-list-options">
				<div className="category_selector-options-nav">
					<ul>
						{ data_list.map( x => <HeadingListItem key={x._id}  name={x.category} _id={x._id} is_active={category_selected===x._id } categoryChanged={categoryChanged} /> )}
					</ul>
				</div>
				<div className="category_selector-options-images">
					{
						data_selected &&
						<ul>
							{data_selected.values.map(x=> <ImageListItem key={x._id} name={`${x.name} ${x.value ? ('(' + x.value + '°)') : ''}`} image_url={x.image.fileUrl} selectItem={selectItem} /> )}
						</ul>
					}
				</div>
			</div>
		</div>
	)
}

export default CategorySelector