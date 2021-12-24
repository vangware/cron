import { suite } from "@vangware/test";
import { parseStringDayOfMonthValue } from "../../src/parsers/parseStringDayOfMonthValue.js";

export default suite([
	{
		given: "a valid number between 1 and 31",
		must: "return that number",
		received: parseStringDayOfMonthValue("13"),
		wanted: 13,
	},
	{
		given: "an invalid number outside 1 and 31",
		must: "return undefined",
		received: parseStringDayOfMonthValue("32"),
		wanted: undefined,
	},
]);
