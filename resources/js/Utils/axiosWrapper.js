import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://your-backend-domain.com', // Replace with your backend URL
    withCredentials: true, // Automatically include cookies
	withXSRFToken: true
});

export default instance;
