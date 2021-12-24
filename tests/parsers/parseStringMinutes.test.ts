import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringMinutes } from "../../src/parsers/parseStringMinutes.js";

export default suite([
	{
		given: "during minute 10",
		must: "return *",
		received: parseStringMinutes("10"),
		wanted: 10,
	},
	{
		given: "every minute",
		must: "return *",
		received: parseStringMinutes(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 10 minutes starting at 2 minutes",
		must: "return CronRange",
		received: parseStringMinutes("2/10"),
		wanted: { every: 10, start: 2 },
	},
	{
		given: "every 10 minutes starting at 0 minute",
		must: "return CronRange",
		received: parseStringMinutes("*/10"),
		wanted: { every: 10, start: CRON_EVERY },
	},
	{
		given: "at minutes 1, 2, 3 and 4",
		must: "return CronList",
		received: parseStringMinutes("1,2,3,4"),
		wanted: [1, 2, 3, 4],
	},
	{
		given: "every minute between 5 and 10",
		must: "return CronRange",
		received: parseStringMinutes("5-10"),
		wanted: { from: 5, to: 10 },
	},
	{
		given: "at minutes 1, 2, 3 and 4, and every minute between 5 and 10",
		must: "return CronList with CronRange int it",
		received: parseStringMinutes("1,2,3,4,5-10"),
		wanted: [1, 2, 3, 4, { from: 5, to: 10 }],
	},
	{
		given: "invalid value",
		must: "return undefined",
		received: parseStringMinutes("INVALID"),
		wanted: undefined,
	},
	{
		given: "invalid value in list",
		must: "return undefined",
		received: parseStringMinutes("1,2,3,4,INVALID"),
		wanted: undefined,
	},
]);
