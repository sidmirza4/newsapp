import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../axios";

const initialState = {
	topNews: [],
	isTopNewsLoading: true,
	topNewsError: null,
	searchResults: [],
	isSearchResultsLoading: false,
	searchResultsError: null,
};

export const getTopNews = createAsyncThunk(
	"news/getTopNews",
	async (country) => {
		const response = await axios.get(`/top-headlines?country=${country}`);
		return response.data.articles;
	}
);

export const getSearchResults = createAsyncThunk(
	"news/getSearchResults",
	async (searchQuery) => {
		const response = await axios.get(
			`/everything?q=${searchQuery}&sortBy=popularity`
		);
		return response.data.articles;
	}
);

export const newsSlice = createSlice({
	name: "news",
	initialState,

	reducers: {
		setTopNews: (state, action) => {
			state.topNews = action.payload;
		},

		setSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},

		setTopNewsAfterSorting: (state, action) => {
			if (action.payload.sortBy === "-publishedAt") {
				state.topNews.sort((a, b) => {
					return new Date(a.publishedAt) - new Date(b.publishedAt);
				});
			} else {
				state.topNews.sort((a, b) => {
					return new Date(b.publishedAt) - new Date(a.publishedAt);
				});
			}
		},

		hideNewsArticle: (state, action) => {
			const topNewsUrls = state.topNews.map((article) => article.url);
			const searchResultsUrls = state.searchResults.map(
				(article) => article.url
			);

			if (topNewsUrls.includes(action.payload)) {
				state.topNews = state.topNews.filter(
					(article) => article.url !== action.payload
				);
			} else if (searchResultsUrls.includes(action.payload)) {
				state.searchResults = state.searchResults.filter(
					(article) => article.url !== action.payload
				);
			}
		},
	},

	extraReducers: {
		[getTopNews.pending]: (state) => {
			state.isTopNewsLoading = true;
		},

		[getTopNews.fulfilled]: (state, action) => {
			state.isTopNewsLoading = false;
			state.topNews = action.payload;
		},

		[getTopNews.rejected]: (state, action) => {
			state.isTopNewsLoading = false;
			state.topNewsError = action.error;
		},

		[getSearchResults.pending]: (state) => {
			state.isSearchResultsLoading = true;
		},

		[getSearchResults.fulfilled]: (state, action) => {
			state.isSearchResultsLoading = false;
			state.searchResults = action.payload;
		},

		[getSearchResults.rejected]: (state, action) => {
			state.isSearchResultsLoading = false;
			state.searchResultsError = action.error;
		},
	},
});

export const {
	setTopNews,
	setSearchResults,
	setTopNewsAfterSorting,
	hideNewsArticle,
} = newsSlice.actions;
export default newsSlice.reducer;
