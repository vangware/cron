import { suite } from "@vangware/test";
import { parseStringDayOfWeekValue } from "../../src/parsers/parseStringDayOfWeekValue.js";

export default suite([
	{
		given: "a valid number between 0 and 7",
		must: "return that number",
		received: parseStringDayOfWeekValue("5"),
		wanted: 5,
	},
	{
		given: "a valid string between SUN and SAT",
		must: "return that string",
		received: parseStringDayOfWeekValue("FRI"),
		wanted: "FRI",
	},
	{
		given: "a valid string between sun and sat",
		must: "return that string in upper case",
		received: parseStringDayOfWeekValue("fri"),
		wanted: "FRI",
	},
	{
		given: "an invalid number outside 0 and 7",
		must: "return undefined",
		received: parseStringDayOfWeekValue("8"),
		wanted: undefined,
	},
	{
		given: "an invalid string outside SUN and SAT",
		must: "return undefined",
		received: parseStringDayOfWeekValue("IDK"),
		wanted: undefined,
	},
]);
