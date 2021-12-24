import { suite } from "@vangware/test";
import { isStringSpecificDayOfWeek } from "../../src/validations/isStringSpecificDayOfWeek.js";

export default suite([
	{
		given: "a valid specific day of week value",
		must: "return true",
		received: isStringSpecificDayOfWeek("1#5"),
		wanted: true,
	},
	{
		given: "an invalid specific day of week value with bigger numbers",
		must: "return false",
		received: isStringSpecificDayOfWeek("9#9"),
		wanted: false,
	},
	{
		given: "an valid value",
		must: "return false",
		received: isStringSpecificDayOfWeek("INVALID"),
		wanted: false,
	},
]);
