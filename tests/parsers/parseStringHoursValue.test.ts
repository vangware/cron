import { suite } from "@vangware/test";
import { parseStringHoursValue } from "../../src/parsers/parseStringHoursValue.js";

export default suite([
	{
		given: "a valid number between 1 and 23",
		must: "return that number",
		received: parseStringHoursValue("10"),
		wanted: 10,
	},
	{
		given: "an invalid number outside 1 and 23",
		must: "return undefined",
		received: parseStringHoursValue("25"),
		wanted: undefined,
	},
]);
