import { test } from "@vangware/test";
import { parseString } from "../../src/parsers/parseString";

export default test([
	{
		given: "A cron expression * * * * * * *",
		must: "return a CronParts object with all set to every",
		received: parseString("* * * * * * *"),
		wanted: {
			dayOfMonth: "*",
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
			seconds: "*",
			year: "*"
		}
	},
	{
		given: "A cron expression * * * * *",
		must: "return a CronParts object omitting year and seconds",
		received: parseString("* * * * *"),
		wanted: {
			dayOfMonth: "*",
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
			seconds: "*",
			year: "*"
		}
	},
	{
		given: "A cron expression 1,2 1,2 1,2 1,2 1,2 1,2 1989,2020",
		must: "return a CronParts object with lists",
		received: parseString("1,2 1,2 1,2 1,2 1,2 1,2 1989,2020"),
		wanted: {
			dayOfMonth: [1, 2],
			dayOfWeek: [1, 2],
			hours: [1, 2],
			minutes: [1, 2],
			month: [1, 2],
			seconds: [1, 2],
			year: [1989, 2020]
		}
	},
	{
		given: "A cron expression 1-2 1-2 1-2 1-2 1-2 1-2 1989-2020",
		must: "return a CronParts object with ranges",
		received: parseString("1-2 1-2 1-2 1-2 1-2 1-2 1989-2020"),
		wanted: {
			dayOfMonth: { from: 1, to: 2 },
			dayOfWeek: { from: 1, to: 2 },
			hours: { from: 1, to: 2 },
			minutes: { from: 1, to: 2 },
			month: { from: 1, to: 2 },
			seconds: { from: 1, to: 2 },
			year: { from: 1989, to: 2020 }
		}
	},
	{
		given: "A cron expression 1/2 1/2 1/2 1/2 1/2 1/2 1989/10",
		must: "return a CronParts object with steps",
		received: parseString("1/2 1/2 1/2 1/2 1/2 1/2 1989/10"),
		wanted: {
			dayOfMonth: { every: 2, start: 1 },
			dayOfWeek: { every: 2, start: 1 },
			hours: { every: 2, start: 1 },
			minutes: { every: 2, start: 1 },
			month: { every: 2, start: 1 },
			seconds: { every: 2, start: 1 },
			year: { every: 10, start: 1989 }
		}
	},
	{
		given: "A cron expression 1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10",
		must: "return a CronParts object with mixed values",
		received: parseString("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"),
		wanted: {
			dayOfMonth: { nearest: 2 },
			dayOfWeek: { last: 1 },
			hours: "*",
			minutes: [{ from: 1, to: 2 }, 3, 4],
			month: ["SEP", "OCT"],
			seconds: { every: 3, start: { from: 1, to: 2 } },
			year: { every: 10, start: "*" }
		}
	},
	{
		given: "An invalid expression",
		must: "return undefined",
		received: parseString("INVALID"),
		wanted: undefined
	}
]);
