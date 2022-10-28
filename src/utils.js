export const getFormattedDate = (date) => {
	const dateObj = new Date(date);

	const year = dateObj.getFullYear();
	// month name
	const month = dateObj.toLocaleString("default", { month: "long" });
	// get full day
	const day = dateObj.getDate();

	//get time
	const time = dateObj.toLocaleString(window.navigator.language, {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});

	return `${day} ${month} ${year} at ${time}`;
};

export const getCurrentCountry = () => {
	const curCtr = window.navigator.language.split("-")[1];
	return curCtr;
};

export const countries = [
	{
		name: "Argentina",
		code: "AR",
	},

	{
		name: "Australia",
		code: "AU",
	},

	{
		name: "Austria",
		code: "AT",
	},

	{
		name: "Belgium",
		code: "BE",
	},

	{
		name: "Brazil",
		code: "BR",
	},

	{
		name: "Bulgaria",
		code: "BG",
	},

	{
		name: "Canada",
		code: "CA",
	},

	{
		name: "China",
		code: "CN",
	},

	{
		name: "Colombia",
		code: "CO",
	},

	{
		name: "Cuba",
		code: "CU",
	},

	{
		name: "Czech Republic",
		code: "CZ",
	},

	{
		name: "Egypt",
		code: "EG",
	},

	{
		name: "France",
		code: "FR",
	},

	{
		name: "Germany",
		code: "DE",
	},

	{
		name: "Greece",
		code: "GR",
	},

	{
		name: "Hong Kong",
		code: "HK",
	},

	{
		name: "Hungary",
		code: "HU",
	},

	{
		name: "India",
		code: "IN",
	},

	{
		name: "Indonesia",
		code: "ID",
	},

	{
		name: "Ireland",
		code: "IE",
	},

	{
		name: "Israel",
		code: "IL",
	},

	{
		name: "Italy",
		code: "IT",
	},

	{
		name: "Japan",
		code: "JP",
	},

	{
		name: "Korea, Republic of",
		code: "KR",
	},

	{
		name: "Latvia",
		code: "LV",
	},

	{
		name: "Lithuania",
		code: "LT",
	},

	{
		name: "Malaysia",
		code: "MY",
	},

	{
		name: "Mexico",
		code: "MX",
	},

	{
		name: "Morocco",
		code: "MA",
	},

	{
		name: "Netherlands",
		code: "NL",
	},

	{
		name: "New Zealand",
		code: "NZ",
	},

	{
		name: "Nigeria",
		code: "NG",
	},

	{
		name: "Norway",
		code: "NO",
	},

	{
		name: "Philippines",
		code: "PH",
	},

	{
		name: "Poland",
		code: "PL",
	},

	{
		name: "Portugal",
		code: "PT",
	},

	{
		name: "Romania",
		code: "RO",
	},

	{
		name: "Russian Federation",
		code: "RU",
	},

	{
		name: "Saudi Arabia",
		code: "SA",
	},

	{
		name: "Serbia",
		code: "RS",
	},

	{
		name: "Serbia and Montenegro",
		code: "CS",
	},

	{
		name: "Singapore",
		code: "SG",
	},

	{
		name: "Slovakia",
		code: "SK",
	},

	{
		name: "Slovenia",
		code: "SI",
	},

	{
		name: "South Africa",
		code: "ZA",
	},

	{
		name: "Sweden",
		code: "SE",
	},

	{
		name: "Switzerland",
		code: "CH",
	},

	{
		name: "Taiwan, Province of China",
		code: "TW",
	},

	{
		name: "Thailand",
		code: "TH",
	},

	{
		name: "Turkey",
		code: "TR",
	},

	{
		name: "Ukraine",
		code: "UA",
	},

	{
		name: "United Arab Emirates",
		code: "AE",
	},

	{
		name: "United Kingdom",
		code: "GB",
	},

	{
		name: "United States",
		code: "US",
	},

	{
		name: "Venezuela",
		code: "VE",
	},
];
