import axios from 'axios';

const API_ENDPOINT = 'http://65.2.63.155:3000/outputspec/test/form';

const apiService = {
	getPageData: (username, password) => {
		return axios.get(API_ENDPOINT);
	}
}

export default apiService;

