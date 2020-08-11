import { test } from "@vangware/test";
import { parseCronDayOfWeekValue } from "../../src/parsers/parseCronDayOfWeekValue";
import { CronDayOfWeekValue } from "../../src/types/CronDayOfWeekValue";

export default test([
	{
		given: "A valid dayOfWeek value",
		must: "return that value",
		received: parseCronDayOfWeekValue(1),
		wanted: "1"
	},
	{
		given: "Other valid dayOfWeek value",
		must: "return that value",
		received: parseCronDayOfWeekValue(7),
		wanted: "7"
	},
	{
		given: "Invalid dayOfWeek value",
		must: "return undefined",
		received: parseCronDayOfWeekValue(99 as CronDayOfWeekValue),
		wanted: undefined
	}
]);
