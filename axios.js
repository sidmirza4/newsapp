import axios from "axios";

const proxy = "https://cors-anywhere.herokuapp.com/";
const base = "https://newsapi.org/v2/";

const axiosInstance = axios.create({
	baseURL: `${proxy}${base}`,
	headers: {
		Authorization: import.meta.env.VITE_NEWS_API_KEY,
	},
});

export default axiosInstance;
