import React, { useEffect } from "react";
import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	FormControl,
	CircularProgress,
	Text,
	Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "@chakra-ui/icons";

import News from "./News";
import { getSearchResults } from "../store/newsSlice";

const Search = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = React.useState("");
	const inputRef = React.useRef(null);

	const onSubmit = (e) => {
		e.preventDefault();
		setSearch(inputRef.current.value);
	};

	useEffect(() => {
		if (!search) return;
		dispatch(getSearchResults(search));
	}, [search]);

	return (
		<Box mt={12}>
			<FormControl as="form" onSubmit={onSubmit}>
				<InputGroup alignItems="center">
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon color="gray.500" />}
					/>
					<Input
						placeholder="Press 'Enter' to search"
						sx={{ borderRadius: 35, borderColor: "gray.500" }}
						ref={inputRef}
					/>
				</InputGroup>
			</FormControl>

			{/* Search results */}
			<SearchResults search={search} />
		</Box>
	);
};

const SearchResults = ({ search }) => {
	if (!search) return null;
	const { isSearchResultsLoading, searchResultsError, searchResults } =
		useSelector((state) => state.news);

	if (isSearchResultsLoading)
		return (
			<Box textAlign="center" mt={12}>
				<CircularProgress isIndeterminate />
			</Box>
		);

	if (searchResultsError) return <Text>Something went wrong...</Text>;

	if (searchResults.length === 0) {
		return <Text mt={4}>No results found</Text>;
	}

	return (
		<Box id="search">
			<Heading size="lg" mt={10}>
				Search results for "{search}":
			</Heading>
			<News allNews={searchResults} />
		</Box>
	);
};

export default Search;
