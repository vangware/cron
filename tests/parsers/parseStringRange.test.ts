import { suite } from "@vangware/test";
import { parseStringRange } from "../../src/parsers/parseStringRange.js";
import { parseStringSecondsValue } from "../../src/parsers/parseStringSecondsValue.js";

const parseStringRangeSeconds = parseStringRange(parseStringSecondsValue);

export default suite([
	{
		given: "a valid range",
		must: "return CronRange object",
		received: parseStringRangeSeconds("13-10"),
		wanted: {
			from: 13,
			to: 10,
		},
	},
	{
		given: "an invalid range",
		must: "return undefined",
		received: parseStringRangeSeconds("INVALID"),
		wanted: undefined,
	},
]);
