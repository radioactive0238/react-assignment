import './FormActions.css';

import { useSelector } from 'react-redux';

const FormActions = () => {

	const output_data = useSelector(state=>state.output);

	const saveOutput = () => {
		console.log("Output data:", output_data);
		alert("Check console for output");
	}


	return(
		<div className="form-actions-main">
			<div className="action-clear">
				<button >  Reset </button>
			</div>
			
			<div className="action-submit">
				<button onClick={saveOutput}> Save Selection </button>
			</div>
		</div>
	)
}

export default FormActions;