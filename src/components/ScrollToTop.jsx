import React from "react";
import { IconButton, HStack } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
	return (
		<HStack position="fixed" bottom={10} right={10}>
			<IconButton
				as="a"
				href="#"
				colorScheme="blue"
				size="lg"
				shadow="md"
				aria-label="Scroll to top"
				sx={{ borderRadius: "50%" }}
			>
				<ArrowUpIcon />
			</IconButton>
		</HStack>
	);
};

export default ScrollToTop;
