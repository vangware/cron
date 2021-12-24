import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronSeconds } from "../../src/parsers/parseCronSeconds.js";

export default suite([
	{
		given: "at second 10 of...",
		must: "return *",
		received: parseCronSeconds(10),
		wanted: "10",
	},
	{
		given: "every second",
		must: "return *",
		received: parseCronSeconds(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 10 seconds starting at 2",
		must: "return CronRange",
		received: parseCronSeconds({ every: 10, start: 2 }),
		wanted: "2/10",
	},
	{
		given: "every 10 seconds starting at 0",
		must: "return CronRange",
		received: parseCronSeconds({ every: 10, start: CRON_EVERY }),
		wanted: "*/10",
	},
	{
		given: "At seconds 1, 2, 3 and 4",
		must: "return CronList",
		received: parseCronSeconds([1, 2, 3, 4]),
		wanted: "1,2,3,4",
	},
	{
		given: "every second between second 5 and 10",
		must: "return CronRange",
		received: parseCronSeconds({ from: 5, to: 10 }),
		wanted: "5-10",
	},
	{
		given: "At seconds 1, 2, 3 and 4 and every second between 5 and 10",
		must: "return CronList with CronRange int it",
		received: parseCronSeconds([1, 2, 3, 4, { from: 5, to: 10 }]),
		wanted: "1,2,3,4,5-10",
	},
]);
