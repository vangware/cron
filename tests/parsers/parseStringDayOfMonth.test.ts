import { suite } from "@vangware/test";
import {
	CRON_EVERY,
	CRON_LAST,
	CRON_START_OR_BLANK,
} from "../../src/constants.js";
import { parseStringDayOfMonth } from "../../src/parsers/parseStringDayOfMonth.js";

export default suite([
	{
		given: "on the 10th day of ...",
		must: "return 10",
		received: parseStringDayOfMonth("10"),
		wanted: 10,
	},
	{
		given: "every day",
		must: "return *",
		received: parseStringDayOfMonth(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "blank day",
		must: "return ?",
		received: parseStringDayOfMonth(CRON_START_OR_BLANK),
		wanted: CRON_START_OR_BLANK,
	},
	{
		given: "every 10 days starting on the 2nd",
		must: "return CronRange",
		received: parseStringDayOfMonth("2/10"),
		wanted: { every: 10, start: 2 },
	},
	{
		given: "every 10 days starting on the 1st",
		must: "return CronRange",
		received: parseStringDayOfMonth("*/10"),
		wanted: { every: 10, start: CRON_EVERY },
	},
	{
		given: "on the 1st, 2nd, 3rd and 4th day",
		must: "return CronList",
		received: parseStringDayOfMonth("1,2,3,4"),
		wanted: [1, 2, 3, 4],
	},
	{
		given: "every day between 5th and 10th",
		must: "return CronList",
		received: parseStringDayOfMonth("5-10"),
		wanted: { from: 5, to: 10 },
	},
	{
		given:
			// eslint-disable-next-line max-len
			"on the 1st, 2nd, 3rd and 4th day and every day between 5th and 10th",
		must: "return CronList",
		received: parseStringDayOfMonth("1,2,3,4,5-10"),
		wanted: [1, 2, 3, 4, { from: 5, to: 10 }],
	},
	{
		given: "last day of the month",
		must: "return CronLast",
		received: parseStringDayOfMonth(CRON_LAST),
		wanted: CRON_LAST,
	},
	{
		given: "on the nearest weekday to the 1st of the month",
		must: "return CronLastValue",
		received: parseStringDayOfMonth("1W"),
		wanted: { nearest: 1 },
	},
	{
		given: "invalid value",
		must: "return undefined",
		received: parseStringDayOfMonth("INVALID"),
		wanted: undefined,
	},
	{
		given: "invalid value in list",
		must: "return undefined",
		received: parseStringDayOfMonth("1,2,3,4,INVALID"),
		wanted: undefined,
	},
]);
