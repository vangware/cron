import { test } from "@vangware/test";
import { CRON_SPECIFIC_SEPARATOR } from "../../src/constants";
import { parseStringSpecificDayOfWeek } from "../../src/parsers/parseStringSpecificDayOfWeek";

export default test([
	{
		given: "a valid W with value 2",
		must: "return CronEvery",
		received: parseStringSpecificDayOfWeek("1#5"),
		wanted: { day: 1, week: 5 }
	},
	{
		given: "an invalid W",
		must: "return undefined",
		received: parseStringSpecificDayOfWeek(CRON_SPECIFIC_SEPARATOR),
		wanted: undefined
	}
]);
