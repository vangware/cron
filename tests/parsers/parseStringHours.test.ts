import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringHours } from "../../src/parsers/parseStringHours.js";

export default suite([
	{
		given: "between 10am and 11am",
		must: "return 10",
		received: parseStringHours("10"),
		wanted: 10,
	},
	{
		given: "every hour",
		must: "return *",
		received: parseStringHours(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "Every 10 hours starting at 02am",
		must: "return CronRange",
		received: parseStringHours("2/10"),
		wanted: { every: 10, start: 2 },
	},
	{
		given: "Every 10 hours starting at 00am",
		must: "return CronRange",
		received: parseStringHours("*/10"),
		wanted: { every: 10, start: CRON_EVERY },
	},
	{
		given: "at 01am, 02am, 03am and 04am",
		must: "return CronList",
		received: parseStringHours("1,2,3,4"),
		wanted: [1, 2, 3, 4],
	},
	{
		given: "between 05am and 10am",
		must: "return CronRange",
		received: parseStringHours("5-10"),
		wanted: { from: 5, to: 10 },
	},
	{
		given:
			// eslint-disable-next-line max-len
			"at 01am, 02am, 03am and 04am, and every hour between 05am and 10am",
		must: "return CronList with CronRange in it",
		received: parseStringHours("1,2,3,4,5-10"),
		wanted: [1, 2, 3, 4, { from: 5, to: 10 }],
	},
	{
		given: "invalid value",
		must: "return undefined",
		received: parseStringHours("INVALID"),
		wanted: undefined,
	},
	{
		given: "invalid value in list",
		must: "return undefined",
		received: parseStringHours("1,2,3,4,INVALID"),
		wanted: undefined,
	},
]);
