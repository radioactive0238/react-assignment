import './OutputOptions.css';

import MarginOptions from './MarginOptions/MarginOptions.js';
import ResolutionOptions from './ResolutionOptions/ResolutionOptions.js';


const OutputOptions = ({ raw_resolutions }) => {
	return(
		<div>
			<MarginOptions />
			<ResolutionOptions resolutions_list={raw_resolutions} />
		</div>
	)
}

export default OutputOptions