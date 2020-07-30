import { test } from "@vangware/test";
import { parseCronRange } from "../../src/parsers/parseCronRange";

export default test([
	{
		given: "a valid range",
		must: "return CronRange object",
		received: parseCronRange({
			from: 13,
			to: 10
		}),
		wanted: "13-10"
	},
	{
		given: "an invalid range",
		must: "return undefined",
		received: parseCronRange("INVALID"),
		wanted: undefined
	}
]);
