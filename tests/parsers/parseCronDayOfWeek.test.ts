import { suite } from "@vangware/test";
import {
	CRON_EVERY,
	CRON_LAST,
	CRON_START_OR_BLANK,
} from "../../src/constants.js";
import { parseCronDayOfWeek } from "../../src/parsers/parseCronDayOfWeek.js";

export default suite([
	{
		given: "every Friday",
		must: "return 6",
		received: parseCronDayOfWeek(6),
		wanted: "6",
	},
	{
		given: "every day",
		must: "return *",
		received: parseCronDayOfWeek(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "blank day",
		must: "return ?",
		received: parseCronDayOfWeek(CRON_START_OR_BLANK),
		wanted: CRON_START_OR_BLANK,
	},
	{
		given: "every 6 days starting on Monday",
		must: "return CronRange",
		received: parseCronDayOfWeek({ every: 6, start: 2 }),
		wanted: "2/6",
	},
	{
		given: "every 6 days starting on Sunday",
		must: "return CronRange",
		received: parseCronDayOfWeek({ every: 6, start: CRON_EVERY }),
		wanted: "*/6",
	},
	{
		given: "on every Sunday, Monday, Tuesday and Wednesday",
		must: "return CronList",
		received: parseCronDayOfWeek([1, 2, 3, 4]),
		wanted: "1,2,3,4",
	},
	{
		given: "every day between Sunday and Thursday",
		must: "return CronRange",
		received: parseCronDayOfWeek({ from: 1, to: 5 }),
		wanted: "1-5",
	},
	{
		given: "every day between Monday and Saturday",
		must: "return CronRange",
		received: parseCronDayOfWeek({ from: "MON", to: "SAT" }),
		wanted: "MON-SAT",
	},
	{
		given:
			// eslint-disable-next-line max-len
			"on every Sunday, Monday and Tuesday, and every day between Thursday and Saturday",
		must: "return CronList",
		received: parseCronDayOfWeek([1, 2, 3, { from: 5, to: 7 }]),
		wanted: "1,2,3,5-7",
	},
	{
		given: "on Saturday",
		must: "return CronLast",
		received: parseCronDayOfWeek(CRON_LAST),
		wanted: CRON_LAST,
	},
	{
		given: "the last Monday of the month",
		must: "return CronLastValue",
		received: parseCronDayOfWeek({ last: 2 }),
		wanted: "2L",
	},
	{
		given: "on the 5th Sunday of the month",
		must: "return CronLastValue",
		received: parseCronDayOfWeek({ day: 1, week: 5 }),
		wanted: "1#5",
	},
]);
