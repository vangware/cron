import { suite } from "@vangware/test";
import { isStringNearestDayOfMonth } from "../../src/validations/isStringNearestDayOfMonth.js";

export default suite([
	{
		given: "a valid near value",
		must: "return true",
		received: isStringNearestDayOfMonth("10W"),
		wanted: true,
	},
	{
		given: "a valid lowercase near value",
		must: "return true",
		received: isStringNearestDayOfMonth("10w"),
		wanted: true,
	},
	{
		given: "an invalid near value with 3 digits",
		must: "return false",
		received: isStringNearestDayOfMonth("100w"),
		wanted: false,
	},
	{
		given: "an valid value",
		must: "return false",
		received: isStringNearestDayOfMonth("INVALID"),
		wanted: false,
	},
]);
