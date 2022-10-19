import { Box, Container, Text, Link } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box width="100%" bg={"gray.200"} color={"gray.700"}>
			<Container textAlign="center" p={4}>
				<Text>
					Built with ❣️ by{" "}
					<Link href="https://mirzashahid.com">Mohd Shahid</Link>
				</Text>
			</Container>
		</Box>
	);
}
