import { Container, Heading, Spacer } from "@chakra-ui/react";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Tabs from "./components/Tabs";
import "./index.css";

function App() {
	return (
		<>
			<Container maxW="container.xl" py={10} minH="100vh">
				<Heading textAlign="center">News App</Heading>
				<Tabs />
				<Spacer />
				<ScrollToTop />
			</Container>
			<Footer />
		</>
	);
}

export default App;
