import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";

import NewsItem from "./NewsItem";

const News = ({ allNews }) => {
	const [localNews, setLocalNews] = useState(allNews);

	const onHide = (url) => {
		const newNews = localNews.filter((news) => news.url !== url);
		setLocalNews(newNews);
	};

	return (
		<Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
			{localNews.map((news) => (
				<NewsItem key={news.url} news={news} onHide={() => onHide(news.url)} />
			))}
		</Grid>
	);
};

export default News;
