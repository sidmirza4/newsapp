import React from "react";
import { Box, Text, Heading, Center, Stack, Flex } from "@chakra-ui/react";
import { ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

import { getFormattedDate } from "../utils";
import { hideNewsArticle } from "../store/newsSlice";

const NewsItem = ({ news }) => {
	const dispatch = useDispatch();

	function hideArticle() {
		dispatch(hideNewsArticle(news.url));
	}

	return (
		<Box position="relative">
			<a href={news.url} rel="noreferrer noopener" target="_blank">
				<Center>
					<Box
						maxW={"445px"}
						w={"full"}
						bg="white"
						boxShadow={"2xl"}
						rounded={"md"}
						p={6}
						overflow={"hidden"}
					>
						<Box
							h={"250px"}
							bg={"gray.100"}
							mt={-6}
							mx={-6}
							mb={16}
							pos={"relative"}
						>
							<img
								src={news.urlToImage}
								style={{ height: "100%", width: "100%" }}
							/>
						</Box>
						<Stack justify="space-between">
							<Heading
								color="gray.700"
								fontSize={"2xl"}
								fontFamily={"body"}
								noOfLines={2}
							>
								{news.title}
							</Heading>
							<Text color={"gray.500"}>{news.description}</Text>
						</Stack>
						<Stack mt={6} direction={"row"} spacing={4} align={"center"}>
							<Stack direction={"column"} spacing={0} fontSize={"sm"}>
								<Text fontWeight={600}>{news.author}</Text>
								<Text color={"gray.500"}>
									{getFormattedDate(news.publishedAt)}
								</Text>
							</Stack>
						</Stack>
					</Box>
				</Center>
			</a>

			{/* hide icon button*/}
			<Flex
				position="absolute"
				top="-3"
				right="-3"
				p="2"
				onClick={hideArticle}
				bg="gray.500"
				borderRadius="50%"
				cursor="pointer"
				justify="center"
				align="center"
				boxShadow="xl"
				aria-label="hide"
			>
				<ViewOffIcon height={4} width={4} color="white" />
			</Flex>
		</Box>
	);
};

export default NewsItem;
