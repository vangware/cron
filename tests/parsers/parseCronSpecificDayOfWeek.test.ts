import { suite } from "@vangware/test";
import { CRON_SPECIFIC_SEPARATOR } from "../../src/constants.js";
import { parseCronSpecificDayOfWeek } from "../../src/parsers/parseCronSpecificDayOfWeek.js";

export default suite([
	{
		given: "a valid W with value 2",
		must: "return CronEvery",
		received: parseCronSpecificDayOfWeek({ day: 1, week: 5 }),
		wanted: "1#5",
	},
	{
		given: "an invalid W",
		must: "return undefined",
		received: parseCronSpecificDayOfWeek(CRON_SPECIFIC_SEPARATOR),
		wanted: undefined,
	},
]);
