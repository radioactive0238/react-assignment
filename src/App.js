// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

import HeaderFilters from './components/HeaderFilters/HeaderFilters.js';
import ContentSelector from './components/ContentSelector/ContentSelector.js';
import OutputOptions from './components/OutputOptions/OutputOptions.js';
import FormActions from './components/FormActions/FromActions.js';

import apiService from './services/apiService.js'

function App() {
	let [raw_data, setRawData] = useState(null);

	const getDataFromApi = () => {
		apiService.getPageData().then((res)=>{
			if(res.status===200){
				setRawData(res.data);
			} else {
				console.log("Error occured in getPageData:", res);
				alert("Error, check console.");
			}
		}).catch((error)=>{
			console.log("Error occured in getPageData:", error);
			alert("Error, check console.");
		});

		
	}

	useEffect(getDataFromApi, []);

	return (
			<div className="App">
				
				{raw_data && 
					<>
						<HeaderFilters raw_targets={raw_data.targetGroup.map((x)=>{  return {_id: x._id, name: x.name} })} raw_categories={raw_data.categories} />
						<ContentSelector raw_target_data={raw_data.targetGroup} />
						<OutputOptions raw_resolutions={raw_data.resolution} />
						<FormActions />
					</>
				}

		    </div>
  );
}

export default App;
