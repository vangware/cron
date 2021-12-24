import { suite } from "@vangware/test";
import { parseCronUnix } from "../../src/parsers/parseCronUnix.js";
import type { CronDayOfMonth } from "../../src/types/CronDayOfMonth.js";

export default suite([
	{
		given: "A CronUnix object with all set to every",
		must: "return * * * * *",
		received: parseCronUnix({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
		}),
		wanted: "* * * * *",
	},
	{
		given: "A CronUnix object with lists",
		must: "return 1,2 1,2 1,2 1,2 1,2",
		received: parseCronUnix({
			dayOfMonth: [1, 2],
			dayOfWeek: [1, 2],
			hours: [1, 2],
			minutes: [1, 2],
			month: [1, 2],
		}),
		wanted: "1,2 1,2 1,2 1,2 1,2",
	},
	{
		given: "A CronUnix object with ranges",
		must: "return 1-2 1-2 1-2 1-2 1-2",
		received: parseCronUnix({
			dayOfMonth: { from: 1, to: 2 },
			dayOfWeek: { from: 1, to: 2 },
			hours: { from: 1, to: 2 },
			minutes: { from: 1, to: 2 },
			month: { from: 1, to: 2 },
		}),
		wanted: "1-2 1-2 1-2 1-2 1-2",
	},
	{
		given: "A CronUnix object with steps",
		must: "return 1/2 1/2 1/2 1/2 1/2",
		received: parseCronUnix({
			dayOfMonth: { every: 2, start: 1 },
			dayOfWeek: { every: 2, start: 1 },
			hours: { every: 2, start: 1 },
			minutes: { every: 2, start: 1 },
			month: { every: 2, start: 1 },
		}),
		wanted: "1/2 1/2 1/2 1/2 1/2",
	},
	{
		given: "A CronUnix object with mixed values",
		must: "return 1-2,3,4 * 2W SEP,OCT 1L",
		received: parseCronUnix({
			dayOfMonth: { nearest: 2 },
			dayOfWeek: { last: 1 },
			hours: "*",
			minutes: [{ from: 1, to: 2 }, 3, 4],
			month: ["SEP", "OCT"],
		}),
		wanted: "1-2,3,4 * 2W SEP,OCT 1L",
	},
	{
		given: "An object with undefined values",
		must: "return 1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10",
		received: parseCronUnix({
			dayOfMonth: undefined as unknown as CronDayOfMonth,
			dayOfWeek: "*",
			hours: "*",
			minutes: "*",
			month: "*",
		}),
		wanted: undefined,
	},
]);
