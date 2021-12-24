import { suite } from "@vangware/test";
import { isStringMonthValue } from "../../src/validations/isStringMonthValue.js";

export default suite([
	{
		given: "a valid number value in the range 1-12",
		must: "return true",
		received: isStringMonthValue("10"),
		wanted: true,
	},
	{
		given: "a valid value in the range JAN-DEC",
		must: "return true",
		received: isStringMonthValue("OCT"),
		wanted: true,
	},
	{
		given: "a valid value in the range JAN-DEC in lowercase",
		must: "return true",
		received: isStringMonthValue("oct"),
		wanted: true,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringMonthValue("OCTOBER"),
		wanted: false,
	},
	{
		given: "an invalid number outside the range 1-12",
		must: "return false",
		received: isStringMonthValue("50"),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringMonthValue("INVALID"),
		wanted: false,
	},
]);
