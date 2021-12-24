import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronMinutes } from "../../src/parsers/parseCronMinutes.js";

export default suite([
	{
		given: "during minute 10",
		must: "return *",
		received: parseCronMinutes(10),
		wanted: "10",
	},
	{
		given: "every minute",
		must: "return *",
		received: parseCronMinutes(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 10 minutes starting at 2 minutes",
		must: "return CronRange",
		received: parseCronMinutes({ every: 10, start: 2 }),
		wanted: "2/10",
	},
	{
		given: "every 10 minutes starting at 0 minute",
		must: "return CronRange",
		received: parseCronMinutes({ every: 10, start: CRON_EVERY }),
		wanted: "*/10",
	},
	{
		given: "at minutes 1, 2, 3 and 4",
		must: "return CronList",
		received: parseCronMinutes([1, 2, 3, 4]),
		wanted: "1,2,3,4",
	},
	{
		given: "every minute between 5 and 10",
		must: "return CronRange",
		received: parseCronMinutes({ from: 5, to: 10 }),
		wanted: "5-10",
	},
	{
		given: "at minutes 1, 2, 3 and 4, and every minute between 5 and 10",
		must: "return CronList with CronRange int it",
		received: parseCronMinutes([1, 2, 3, 4, { from: 5, to: 10 }]),
		wanted: "1,2,3,4,5-10",
	},
]);
