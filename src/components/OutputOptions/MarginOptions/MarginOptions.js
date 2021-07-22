import './MarginOptions.css';

import { useDispatch } from 'react-redux';
import outputActions from './../../../actionCreators/outputActions.js'


const MarginOptions = () => {

	const dispatch = useDispatch();

	const addMargin = (type, value) => {
		dispatch(outputActions.setOutputOptions({
			'opt_name': 'margin',
			'opt_data': value,
			'opt_type': type
		}))
	}


	return(
		<div className="margin-list-main">
			<div className="margin-list-heading">
				<h3> Margin </h3>
			</div>
			<div className="margin-list-options">
				<div className="margin-option-item">
					<label htmlFor="top_l"> Top </label><br/>
					<input name="top_l" onChange={ (e)=> addMargin('top', e.target.value) } /> 
				</div>
				<div className="margin-option-item">
					<label htmlFor="left_l"> Left </label><br/>
					<input name="left_l" onChange={ (e)=> addMargin('left', e.target.value) }/> 
				</div>
				<div className="margin-option-item">
					<label htmlFor="right_l"> Right </label><br/>
					<input name="right_l" onChange={ (e)=> addMargin('right', e.target.value) }/> 
				</div>
				<div className="margin-option-item">
					<label htmlFor="bottom_l"> Bottom </label><br/>
					<input name="bottom_l" onChange={ (e)=> addMargin('bottom', e.target.value) }/> 
				</div>
			</div>
		</div>
	)
}

export default MarginOptions