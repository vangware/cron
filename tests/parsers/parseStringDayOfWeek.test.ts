import { suite } from "@vangware/test";
import {
	CRON_EVERY,
	CRON_LAST,
	CRON_START_OR_BLANK,
} from "../../src/constants.js";
import { parseStringDayOfWeek } from "../../src/parsers/parseStringDayOfWeek.js";

export default suite([
	{
		given: "every Friday",
		must: "return 6",
		received: parseStringDayOfWeek("6"),
		wanted: 6,
	},
	{
		given: "every day",
		must: "return *",
		received: parseStringDayOfWeek(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "blank day",
		must: "return ?",
		received: parseStringDayOfWeek(CRON_START_OR_BLANK),
		wanted: CRON_START_OR_BLANK,
	},
	{
		given: "every 6 days starting on Monday",
		must: "return CronRange",
		received: parseStringDayOfWeek("2/6"),
		wanted: { every: 6, start: 2 },
	},
	{
		given: "every 6 days starting on Sunday",
		must: "return CronRange",
		received: parseStringDayOfWeek("*/6"),
		wanted: { every: 6, start: CRON_EVERY },
	},
	{
		given: "on every Sunday, Monday, Tuesday and Wednesday",
		must: "return CronList",
		received: parseStringDayOfWeek("1,2,3,4"),
		wanted: [1, 2, 3, 4],
	},
	{
		given: "every day between Sunday and Thursday",
		must: "return CronRange",
		received: parseStringDayOfWeek("1-5"),
		wanted: { from: 1, to: 5 },
	},
	{
		given: "every day between Monday and Saturday",
		must: "return CronRange",
		received: parseStringDayOfWeek("MON-SAT"),
		wanted: { from: "MON", to: "SAT" },
	},
	{
		given: "every day between Monday and Saturday",
		must: "return CronRange",
		received: parseStringDayOfWeek("mon-sat"),
		wanted: { from: "MON", to: "SAT" },
	},
	{
		given:
			// eslint-disable-next-line max-len
			"on every Sunday, Monday and Tuesday, and every day between Thursday and Saturday",
		must: "return CronList",
		received: parseStringDayOfWeek("1,2,3,5-7"),
		wanted: [1, 2, 3, { from: 5, to: 7 }],
	},
	{
		given: "on Saturday",
		must: "return CronLast",
		received: parseStringDayOfWeek(CRON_LAST),
		wanted: CRON_LAST,
	},
	{
		given: "the last Monday of the month",
		must: "return CronLastValue",
		received: parseStringDayOfWeek("2L"),
		wanted: { last: 2 },
	},
	{
		given: "on the 5th Sunday of the month",
		must: "return CronLastValue",
		received: parseStringDayOfWeek("1#5"),
		wanted: { day: 1, week: 5 },
	},
	{
		given: "invalid value",
		must: "return undefined",
		received: parseStringDayOfWeek("INVALID"),
		wanted: undefined,
	},
	{
		given: "invalid value in list",
		must: "return undefined",
		received: parseStringDayOfWeek("1,2,3,4,INVALID"),
		wanted: undefined,
	},
]);
