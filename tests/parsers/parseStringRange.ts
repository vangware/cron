import { test } from "@vangware/test";
import { parseStringRange } from "../../src/parsers/parseStringRange";
import { parseStringSecondsValue } from "../../src/parsers/parseStringSecondsValue";

export default test([
	{
		given: "a valid range",
		must: "return CronRange object",
		received: parseStringRange(parseStringSecondsValue)("13-10"),
		wanted: {
			from: 13,
			to: 10
		}
	},
	{
		given: "an invalid range",
		must: "return undefined",
		received: parseStringRange(parseStringSecondsValue)("INVALID"),
		wanted: undefined
	}
]);
