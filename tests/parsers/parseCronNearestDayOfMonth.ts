import { test } from "@vangware/test";
import { parseCronNearestDayOfMonth } from "../../src/parsers/parseCronNearestDayOfMonth";

export default test([
	{
		given: "a valid W with value 2",
		must: "return CronEvery",
		received: parseCronNearestDayOfMonth({ nearest: 2 }),
		wanted: "2W"
	},
	{
		given: "an invalid W",
		must: "return undefined",
		received: parseCronNearestDayOfMonth("INVALID"),
		wanted: undefined
	}
]);
