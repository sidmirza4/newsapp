import axios from "axios";

const base = "https://corsproxy.io/" + encodeURIComponent("https://newsapi.org/v2/");

const axiosInstance = axios.create({
	baseURL: `${base}`,
	headers: {
		Authorization: import.meta.env.VITE_NEWS_API_KEY,
	},
});

export default axiosInstance;
