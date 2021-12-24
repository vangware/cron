import { suite } from "@vangware/test";
import { isStringDayOfMonthValue } from "../../src/validations/isStringDayOfMonthValue.js";

export default suite([
	{
		given: "a valid number value in the range 1-31",
		must: "return true",
		received: isStringDayOfMonthValue("13"),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 1-31",
		must: "return false",
		received: isStringDayOfMonthValue("50"),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringDayOfMonthValue("INVALID"),
		wanted: false,
	},
]);
