import React from "react";
import { Grid } from "@chakra-ui/react";

import NewsItem from "./NewsItem";

const News = ({ allNews }) => {
	return (
		<Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
			{allNews.map((news) => (
				<NewsItem key={news.url} news={news} />
			))}
		</Grid>
	);
};

export default News;
