import './AlignmentSelector.css'

import { useDispatch } from 'react-redux';

import outputActions from './../../../actionCreators/outputActions.js'


const AlignmentSelector = () => {

	let radio_options = [{_id: '1111', name: 'Top', value: 'top'},{_id: '2222', name: 'Center', value: 'center'},{_id: '3333', name: 'Bottom', value: 'bottom'}];
	const dispatch = useDispatch();

	const itemClicked = (value)=>{
		dispatch(outputActions.setOutputOptions({
			'opt_name': 'alignment',
			'opt_data': value
		}))
	}

	return(
		<div className="alignment-list-main">
			<div className="alignment-list-heading">
				<h3> Alignment </h3>
			</div>
			<div className="alignment-list-options">
				{radio_options.map(x=>
					<div className="alignment-option-item" key={x._id}>
						<input type="checkbox" name="alignment_radio" value={x.value} onChange={(e)=>{ itemClicked(e.target.value) }}  /> <label htmlFor="alignment_radio">{x.name}</label>
					</div>
				)}
			</div>
		</div>
	)
}

export default AlignmentSelector;