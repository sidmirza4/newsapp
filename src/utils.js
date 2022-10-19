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
