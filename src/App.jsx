import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, Heading, Spacer } from "@chakra-ui/react";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Tabs from "./components/Tabs";
import "./index.css";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Container maxW="container.xl" py={10} minH="100vh">
				<Heading textAlign="center">News App</Heading>
				<Tabs />
				<Spacer />
				<ScrollToTop />
			</Container>
			<Footer />
		</QueryClientProvider>
	);
}

export default App;
