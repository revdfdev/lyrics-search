import axios from 'axios';
import { API_DOMAIN } from '../config/config';


const axiosInstance = axios.create({
	 baseURL: API_DOMAIN,
	 timeout: 20000,
	 headers: {
	 	'Accept': 'application/json',
	 	'Content-type': 'application/json'
	 }
});


/*axiosInstance.interceptors.request.use(config => {
	config.headers['apikey'] = `${process.env.MUSIXMATCH_API_KEY}`
	return config;
}, error => {
	console.log("Cannot set header", error);
	return Promise.reject(error);
});*/

export default axiosInstance;
