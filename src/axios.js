import axios from "axios";

const base = "https://newsapi.org/v2/";

const axiosInstance = axios.create({
	baseURL: `${base}`,
	headers: {
		Authorization: "354ff711038749d98a60ade60e32e737",
	},
});

export default axiosInstance;
