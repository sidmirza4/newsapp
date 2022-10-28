import React from "react";
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
import { SearchIcon } from "@chakra-ui/icons";
import News from "./News";
import { useSearchResults } from "../api";

const Search = () => {
	const [search, setSearch] = React.useState("");
	const inputRef = React.useRef(null);

	const onSubmit = (e) => {
		e.preventDefault();
		setSearch(inputRef.current.value);
	};

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
	const { data, isLoading, isError } = useSearchResults(search);

	if (isLoading)
		return (
			<Box textAlign="center" mt={12}>
				<CircularProgress isIndeterminate />
			</Box>
		);

	if (isError) return <Text>Something went wrong...</Text>;

	if (data.articles.length === 0) {
		return <Text mt={4}>No results found</Text>;
	}

	return (
		<Box id="search">
			<Heading size="lg" mt={10}>
				Search results for "{search}":
			</Heading>
			<News allNews={data.articles} />
		</Box>
	);
};

export default Search;
