import { suite } from "@vangware/test";
import { parseStringUnix } from "../../src/parsers/parseStringUnix.js";

export default suite([
	{
		given: "A cron expression * * * * *",
		must: "return a CronUnix object with all set to every",
		received: parseStringUnix("* * * * *"),
		wanted: {
			dayOfMonth: "*",
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
		},
	},
	{
		given: "A cron expression * * * * *",
		must: "return a CronUnix object omitting year and seconds",
		received: parseStringUnix("* * * * *"),
		wanted: {
			dayOfMonth: "*",
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
		},
	},
	{
		given: "A cron expression 1,2 1,2 1,2 1,2 1,2",
		must: "return a CronUnix object with lists",
		received: parseStringUnix("1,2 1,2 1,2 1,2 1,2"),
		wanted: {
			dayOfMonth: [1, 2],
			dayOfWeek: [1, 2],
			hours: [1, 2],
			minutes: [1, 2],
			month: [1, 2],
		},
	},
	{
		given: "A cron expression 1-2 1-2 1-2 1-2 1-2",
		must: "return a CronUnix object with ranges",
		received: parseStringUnix("1-2 1-2 1-2 1-2 1-2"),
		wanted: {
			dayOfMonth: { from: 1, to: 2 },
			dayOfWeek: { from: 1, to: 2 },
			hours: { from: 1, to: 2 },
			minutes: { from: 1, to: 2 },
			month: { from: 1, to: 2 },
		},
	},
	{
		given: "A cron expression 1/2 1/2 1/2 1/2 1/2",
		must: "return a CronUnix object with steps",
		received: parseStringUnix("1/2 1/2 1/2 1/2 1/2"),
		wanted: {
			dayOfMonth: { every: 2, start: 1 },
			dayOfWeek: { every: 2, start: 1 },
			hours: { every: 2, start: 1 },
			minutes: { every: 2, start: 1 },
			month: { every: 2, start: 1 },
		},
	},
	{
		given: "A cron expression 1-2,3,4 * 2W SEP,OCT 1L",
		must: "return a CronUnix object with mixed values",
		received: parseStringUnix("1-2,3,4 * 2W SEP,OCT 1L"),
		wanted: {
			dayOfMonth: { nearest: 2 },
			dayOfWeek: { last: 1 },
			hours: "*",
			minutes: [{ from: 1, to: 2 }, 3, 4],
			month: ["SEP", "OCT"],
		},
	},
	{
		given: "An invalid expression",
		must: "return undefined",
		received: parseStringUnix("INVALID"),
		wanted: undefined,
	},
]);
