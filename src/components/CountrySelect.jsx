import React from "react";
import { Select } from "@chakra-ui/react";
import { getDefaultCountry } from "../utils";

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
			<option value="AR">Argentina</option>
			<option value="AU">Australia</option>
			<option value="AT">Austria</option>
			<option value="BE">Belgium</option>
			<option value="BR">Brazil</option>
			<option value="BG">Bulgaria</option>
			<option value="CA">Canada</option>
			<option value="CN">China</option>
			<option value="CO">Colombia</option>
			<option value="CU">Cuba</option>
			<option value="CZ">Czech Republic</option>
			<option value="EG">Egypt</option>
			<option value="FR">France</option>
			<option value="DE">Germany</option>
			<option value="GR">Greece</option>
			<option value="HK">Hong Kong</option>
			<option value="HU">Hungary</option>
			<option value="IN">India</option>
			<option value="ID">Indonesia</option>
			<option value="IE">Ireland</option>
			<option value="IL">Israel</option>
			<option value="IT">Italy</option>
			<option value="JP">Japan</option>
			<option value="KR">Korea, Republic of</option>
			<option value="LV">Latvia</option>
			<option value="LT">Lithuania</option>
			<option value="MY">Malaysia</option>
			<option value="MX">Mexico</option>
			<option value="MA">Morocco</option>
			<option value="NL">Netherlands</option>
			<option value="NZ">New Zealand</option>
			<option value="NG">Nigeria</option>
			<option value="NO">Norway</option>
			<option value="PH">Philippines</option>
			<option value="PL">Poland</option>
			<option value="PT">Portugal</option>
			<option value="RO">Romania</option>
			<option value="RU">Russian Federation</option>
			<option value="SA">Saudi Arabia</option>
			<option value="RS">Serbia</option>
			<option value="CS">Serbia and Montenegro</option>
			<option value="SG">Singapore</option>
			<option value="SK">Slovakia</option>
			<option value="SI">Slovenia</option>
			<option value="ZA">South Africa</option>
			<option value="SE">Sweden</option>
			<option value="CH">Switzerland</option>
			<option value="TW">Taiwan, Province of China</option>
			<option value="TH">Thailand</option>
			<option value="TR">Turkey</option>
			<option value="UA">Ukraine</option>
			<option value="AE">United Arab Emirates</option>
			<option value="GB">United Kingdom</option>
			<option value="US">United States</option>
			<option value="VE">Venezuela</option>
		</Select>
	);
};

export default CountrySelect;
