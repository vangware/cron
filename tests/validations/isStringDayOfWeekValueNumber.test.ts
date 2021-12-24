import { suite } from "@vangware/test";
import { isStringDayOfWeekValueNumber } from "../../src/validations/isStringDayOfWeekValueNumber.js";

export default suite([
	{
		given: "a valid number value in the range 0-7",
		must: "return true",
		received: isStringDayOfWeekValueNumber("5"),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 0-7",
		must: "return false",
		received: isStringDayOfWeekValueNumber("10"),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringDayOfWeekValueNumber("INVALID"),
		wanted: false,
	},
]);
