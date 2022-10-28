import React from "react";
import { Select } from "@chakra-ui/react";

import { countries } from "../utils";

const CountrySelect = ({ country, setCountry }) => {
	const changeHandler = (e) => {
		setCountry(e.target.value);
	};

	return (
		<Select
			onChange={changeHandler}
			width={200}
			id="country"
			value={country}
			name="country"
			size="lg"
		>
			{countries.map((country) => (
				<option key={country.code} value={country.code}>
					{country.name}
				</option>
			))}
		</Select>
	);
};

export default CountrySelect;
