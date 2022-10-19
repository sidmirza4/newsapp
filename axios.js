import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://newsapi.org/v2",
	headers: {
		Authorization: import.meta.env.VITE_NEWS_API_KEY,
	},
});

export default axiosInstance;
