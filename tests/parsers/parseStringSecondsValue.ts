import { test } from "@vangware/test";
import { parseStringSecondsValue } from "../../src/parsers/parseStringSecondsValue";

export default test([
	{
		given: "a valid number between 1 and 59",
		must: "return that number",
		received: parseStringSecondsValue("10"),
		wanted: 10
	},
	{
		given: "an invalid number outside 1 and 59",
		must: "return undefined",
		received: parseStringSecondsValue("61"),
		wanted: undefined
	}
]);
