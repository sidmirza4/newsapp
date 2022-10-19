import { useQuery } from "@tanstack/react-query";

import axios from "./axios";

const defaultCountry = window.navigator.language.split("-")[1];

const getNewsByCountry = async (country = defaultCountry) => {
	return axios.get(`top-headlines?country=${country}`).then((res) => res.data);
};

export const useNewsByCountry = (country, sortBy) => {
	return useQuery(["news", country, sortBy], () => getNewsByCountry(country), {
		select: (data) => {
			if (sortBy === "-publishedAt") {
				return data.articles.sort(
					(a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
				);
			}
			return data.articles;
		},
	});
};

// get search results
const getSearchResults = async (query) => {
	return axios.get(`everything?q=${query}`).then((res) => res.data);
};

export const useSearchResults = (query) => {
	return useQuery(["search", query], () => getSearchResults(query));
};
