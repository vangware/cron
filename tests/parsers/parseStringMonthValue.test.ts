import { suite } from "@vangware/test";
import { parseStringMonthValue } from "../../src/parsers/parseStringMonthValue.js";

export default suite([
	{
		given: "a valid number between 1 and 12",
		must: "return that number",
		received: parseStringMonthValue("10"),
		wanted: 10,
	},
	{
		given: "a valid string between JAN and DEC",
		must: "return that string",
		received: parseStringMonthValue("OCT"),
		wanted: "OCT",
	},
	{
		given: "a valid string between jan and dec",
		must: "return that string in upper case",
		received: parseStringMonthValue("oct"),
		wanted: "OCT",
	},
	{
		given: "an invalid number outside 1 and 12",
		must: "return undefined",
		received: parseStringMonthValue("24"),
		wanted: undefined,
	},
	{
		given: "an invalid string outside JAN and DEC",
		must: "return undefined",
		received: parseStringMonthValue("IDK"),
		wanted: undefined,
	},
]);
