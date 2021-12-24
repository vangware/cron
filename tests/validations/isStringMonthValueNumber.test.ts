import { suite } from "@vangware/test";
import { isStringMonthValueNumber } from "../../src/validations/isStringMonthValueNumber.js";

export default suite([
	{
		given: "a valid number value in the range 1-12",
		must: "return true",
		received: isStringMonthValueNumber("10"),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 1-12",
		must: "return false",
		received: isStringMonthValueNumber("50"),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringMonthValueNumber("INVALID"),
		wanted: false,
	},
]);
