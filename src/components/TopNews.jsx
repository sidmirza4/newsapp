import React, { useState, useEffect } from "react";
import {
	Box,
	CircularProgress,
	Flex,
	Heading,
	HStack,
	Select,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import CountrySelect from "./CountrySelect";
import News from "./News";
import { getTopNews, setTopNewsAfterSorting } from "../store/newsSlice";
import { getDefaultCountry } from "../utils";

const defaultCountry = getDefaultCountry();

const TopNews = () => {
	const [country, setCountry] = useState(defaultCountry);
	const [sortBy, setSortBy] = useState("publishedAt");
	const dispatch = useDispatch();

	const { isTopNewsLoading, topNews, topNewsError } = useSelector(
		(state) => state.news
	);

	useEffect(() => {
		dispatch(getTopNews(country));
	}, [country]);

	useEffect(() => {
		dispatch(setTopNewsAfterSorting({ sortBy }));
	}, [sortBy]);

	const Inner = () => {
		if (isTopNewsLoading) {
			return (
				<Box textAlign="center" mt={12}>
					<CircularProgress isIndeterminate />
				</Box>
			);
		}

		if (Boolean(topNewsError)) {
			return <Box textAlign="center">Something went wrong 😠!</Box>;
		}

		if (topNews.length === 0) {
			return (
				<Box textAlign="center" mt={10}>
					There is nothing to see ☹️!
				</Box>
			);
		}

		return (
			<Box mt={10}>
				<News allNews={topNews} />
			</Box>
		);
	};

	return (
		<Box id="top-news" mt={12}>
			<Flex gap={4} justify="space-between">
				<Heading size="xl">Top News</Heading>

				<HStack spacing={4}>
					<CountrySelect country={country} setCountry={setCountry} />
					{/* Sort by select */}
					<Select
						value={sortBy}
						size="lg"
						width={200}
						onChange={(e) => setSortBy(e.target.value)}
					>
						<option value="publishedAt">Newest first</option>
						<option value="-publishedAt">Oldest first</option>
					</Select>
				</HStack>
			</Flex>
			<Inner />
		</Box>
	);
};

export default TopNews;
