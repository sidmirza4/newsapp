import React from "react";
import {
	Tabs as ChTabs,
	Tab,
	TabPanel,
	TabPanels,
	TabList,
} from "@chakra-ui/react";

import TopNews from "./TopNews";
import Search from "./Search";

const Tabs = () => {
	return (
		<ChTabs mt={10} variant="enclosed-colored" isFitted>
			<TabList>
				<Tab>Top News</Tab>
				<Tab>Search</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<TopNews />
				</TabPanel>
				<TabPanel>
					<Search />
				</TabPanel>
			</TabPanels>
		</ChTabs>
	);
};

export default Tabs;
