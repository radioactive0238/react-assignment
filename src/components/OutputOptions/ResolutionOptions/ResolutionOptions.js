import './ResolutionOptions.css'

import { useDispatch } from 'react-redux';
import outputActions from './../../../actionCreators/outputActions.js'

const ResolutionOptions = ({ resolutions_list }) => {


	const dispatch = useDispatch();

	const addResolution = (value) => {
		dispatch(outputActions.setOutputOptions({
			'opt_name': 'resolution',
			'opt_data': value,
		}))
	}

	return(
		<div className="resolution-list-main">
			<div className="resolution-list-heading">
				<h3> Output Resolution </h3>
			</div>
			<div className="resolution-list-options">
				<label htmlFor="reslutn"> Presets </label><br/>
				<select name="reslutn" onChange={ (e) => addResolution(e.target.value )}>
					{
						resolutions_list.map(x=> <option key={x._id} value={x.value}>{x.value}</option>)
					
					}
				</select>
			</div>
		</div>
	)
}

export default ResolutionOptions