import { suite } from "@vangware/test";
import { parseCronDayOfWeekValue } from "../../src/parsers/parseCronDayOfWeekValue.js";
import type { CronDayOfWeekValue } from "../../src/types/CronDayOfWeekValue.js";

export default suite([
	{
		given: "A valid dayOfWeek value",
		must: "return that value",
		received: parseCronDayOfWeekValue(1),
		wanted: "1",
	},
	{
		given: "Other valid dayOfWeek value",
		must: "return that value",
		received: parseCronDayOfWeekValue(7),
		wanted: "7",
	},
	{
		given: "Invalid dayOfWeek value",
		must: "return undefined",
		received: parseCronDayOfWeekValue(99 as CronDayOfWeekValue),
		wanted: undefined,
	},
]);
