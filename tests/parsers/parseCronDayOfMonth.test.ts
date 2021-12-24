import { suite } from "@vangware/test";
import {
	CRON_EVERY,
	CRON_LAST,
	CRON_START_OR_BLANK,
} from "../../src/constants.js";
import { parseCronDayOfMonth } from "../../src/parsers/parseCronDayOfMonth.js";

export default suite([
	{
		given: "on the 10th day of ...",
		must: "return 10",
		received: parseCronDayOfMonth(10),
		wanted: "10",
	},
	{
		given: "every day",
		must: "return *",
		received: parseCronDayOfMonth(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "blank day",
		must: "return ?",
		received: parseCronDayOfMonth(CRON_START_OR_BLANK),
		wanted: CRON_START_OR_BLANK,
	},
	{
		given: "every 10 days starting on the 2nd",
		must: "return CronRange",
		received: parseCronDayOfMonth({ every: 10, start: 2 }),
		wanted: "2/10",
	},
	{
		given: "every 10 days starting on the 1st",
		must: "return CronRange",
		received: parseCronDayOfMonth({ every: 10, start: CRON_EVERY }),
		wanted: "*/10",
	},
	{
		given: "every 99 days starting on the 1st",
		must: "return undefined",
		received: parseCronDayOfMonth({ every: 99, start: CRON_EVERY }),
		wanted: undefined,
	},
	{
		given: "on the 1st, 2nd, 3rd and 4th day",
		must: "return CronList",
		received: parseCronDayOfMonth([1, 2, 3, 4]),
		wanted: "1,2,3,4",
	},
	{
		given: "every day between 5th and 10th",
		must: "return CronList",
		received: parseCronDayOfMonth({ from: 5, to: 10 }),
		wanted: "5-10",
	},
	{
		given:
			// eslint-disable-next-line max-len
			"on the 1st, 2nd, 3rd and 4th day and every day between 5th and 10th",
		must: "return CronList",
		received: parseCronDayOfMonth([1, 2, 3, 4, { from: 5, to: 10 }]),
		wanted: "1,2,3,4,5-10",
	},
	{
		given: "last day of the month",
		must: "return CronLast",
		received: parseCronDayOfMonth(CRON_LAST),
		wanted: CRON_LAST,
	},
	{
		given: "on the nearest weekday to the 1st of the month",
		must: "return CronLastValue",
		received: parseCronDayOfMonth({ nearest: 1 }),
		wanted: "1W",
	},
]);
