import { suite } from "@vangware/test";
import { parseCronQuartz } from "../../src/parsers/parseCronQuartz.js";
import type { CronDayOfMonth } from "../../src/types/CronDayOfMonth.js";

export default suite([
	{
		given: "A CronQuartz object with all set to every",
		must: "return * * * * * * *",
		received: parseCronQuartz({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
			seconds: "*",
			year: "*",
		}),
		wanted: "* * * * * * *",
	},
	{
		given: "A CronQuartz object with lists",
		must: "return 1,2 1,2 1,2 1,2 1,2 1,2 1989,2020",
		received: parseCronQuartz({
			dayOfMonth: [1, 2],
			dayOfWeek: [1, 2],
			hours: [1, 2],
			minutes: [1, 2],
			month: [1, 2],
			seconds: [1, 2],
			year: [1989, 2020],
		}),
		wanted: "1,2 1,2 1,2 1,2 1,2 1,2 1989,2020",
	},
	{
		given: "A CronQuartz object with ranges",
		must: "return 1-2 1-2 1-2 1-2 1-2 1-2 1989-2020",
		received: parseCronQuartz({
			dayOfMonth: { from: 1, to: 2 },
			dayOfWeek: { from: 1, to: 2 },
			hours: { from: 1, to: 2 },
			minutes: { from: 1, to: 2 },
			month: { from: 1, to: 2 },
			seconds: { from: 1, to: 2 },
			year: { from: 1989, to: 2020 },
		}),
		wanted: "1-2 1-2 1-2 1-2 1-2 1-2 1989-2020",
	},
	{
		given: "A CronQuartz object with steps",
		must: "return 1/2 1/2 1/2 1/2 1/2 1/2 1989/10",
		received: parseCronQuartz({
			dayOfMonth: { every: 2, start: 1 },
			dayOfWeek: { every: 2, start: 1 },
			hours: { every: 2, start: 1 },
			minutes: { every: 2, start: 1 },
			month: { every: 2, start: 1 },
			seconds: { every: 2, start: 1 },
			year: { every: 10, start: 1989 },
		}),
		wanted: "1/2 1/2 1/2 1/2 1/2 1/2 1989/10",
	},
	{
		given: "A CronQuartz object with mixed values",
		must: "return 1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10",
		received: parseCronQuartz({
			dayOfMonth: { nearest: 2 },
			dayOfWeek: { last: 1 },
			hours: "*",
			minutes: [{ from: 1, to: 2 }, 3, 4],
			month: ["SEP", "OCT"],
			seconds: { every: 3, start: { from: 1, to: 2 } },
			year: { every: 10, start: "*" },
		}),
		wanted: "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10",
	},
	{
		given: "An object with undefined values",
		must: "return 1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10",
		received: parseCronQuartz({
			dayOfMonth: undefined as unknown as CronDayOfMonth,
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
			seconds: "*",
			year: "*",
		}),
		wanted: undefined,
	},
]);
