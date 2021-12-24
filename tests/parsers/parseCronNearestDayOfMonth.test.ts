import { suite } from "@vangware/test";
import { parseCronNearestDayOfMonth } from "../../src/parsers/parseCronNearestDayOfMonth.js";
import type { CronDayOfMonthValue } from "../../src/types/CronDayOfMonthValue.js";

export default suite([
	{
		given: "a valid W with value 2",
		must: "return CronEvery",
		received: parseCronNearestDayOfMonth({ nearest: 2 }),
		wanted: "2W",
	},
	{
		given: "an invalid W",
		must: "return undefined",
		received: parseCronNearestDayOfMonth({
			nearest: 99 as CronDayOfMonthValue,
		}),
		wanted: undefined,
	},
]);
