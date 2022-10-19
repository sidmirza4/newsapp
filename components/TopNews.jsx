import React, { useEffect, useState } from "react";
import {
	Box,
	CircularProgress,
	Flex,
	Heading,
	HStack,
	Select,
} from "@chakra-ui/react";

import { useNewsByCountry } from "../api";
import CountrySelect from "./CountrySelect";
import News from "./News";

const defaultCountry = window.navigator.language.split("-")[1];

const TopNews = () => {
	const [country, setCountry] = useState(defaultCountry);
	const [sortBy, setSortBy] = useState("publishedAt");
	const { data, isLoading, isError } = useNewsByCountry(country, sortBy);

	const Inner = () => {
		if (isLoading) {
			return (
				<Box textAlign="center" mt={12}>
					<CircularProgress isIndeterminate />
				</Box>
			);
		}

		if (isError) {
			return <Box textAlign="center">Error</Box>;
		}

		if (data.length === 0) {
			return (
				<Box textAlign="center" mt={10}>
					There is nothing to see ☹️!
				</Box>
			);
		}

		return (
			<Box mt={10}>
				<News allNews={data} />
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
