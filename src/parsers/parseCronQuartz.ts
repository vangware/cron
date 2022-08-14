import { join } from "@vangware/iterables";
import { isUndefined } from "@vangware/predicates";
import type { CronQuartz } from "../types/CronQuartz.js";
import { parseCronDayOfMonth } from "./parseCronDayOfMonth.js";
import { parseCronDayOfWeek } from "./parseCronDayOfWeek.js";
import { parseCronHours } from "./parseCronHours.js";
import { parseCronMinutes } from "./parseCronMinutes.js";
import { parseCronMonth } from "./parseCronMonth.js";
import { parseCronSeconds } from "./parseCronSeconds.js";
import { parseCronYear } from "./parseCronYear.js";

/**
 * Parses `CronQuartz` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronQuartz({
 * 	dayOfMonth: "*",
 * 	dayOfWeek: "*",
 * 	hours: "*",
 * 	minutes: "*",
 * 	month: "*",
 * 	seconds: "*",
 * 	year: "*",
 * }); // wanted: "* * * * * * *"
 * parseCronQuartz({
 * 	dayOfMonth: [1, 2],
 * 	dayOfWeek: [1, 2],
 * 	hours: [1, 2],
 * 	minutes: [1, 2],
 * 	month: [1, 2],
 * 	seconds: [1, 2],
 * 	year: [1989, 2020],
 * }); // "1,2 1,2 1,2 1,2 1,2 1,2 1989,2020"
 * parseCronQuartz({
 * 	dayOfMonth: { from: 1, to: 2 },
 * 	dayOfWeek: { from: 1, to: 2 },
 * 	hours: { from: 1, to: 2 },
 * 	minutes: { from: 1, to: 2 },
 * 	month: { from: 1, to: 2 },
 * 	seconds: { from: 1, to: 2 },
 * 	year: { from: 1989, to: 2020 },
 * }); // "1-2 1-2 1-2 1-2 1-2 1-2 1989-2020"
 * parseCronQuartz({
 * 	dayOfMonth: { every: 2, start: 1 },
 * 	dayOfWeek: { every: 2, start: 1 },
 * 	hours: { every: 2, start: 1 },
 * 	minutes: { every: 2, start: 1 },
 * 	month: { every: 2, start: 1 },
 * 	seconds: { every: 2, start: 1 },
 * 	year: { every: 10, start: 1989 },
 * }); // "1/2 1/2 1/2 1/2 1/2 1/2 1989/10"
 * parseCronQuartz({
 * 	dayOfMonth: { nearest: 2 },
 * 	dayOfWeek: { last: 1 },
 * 	hours: "*",
 * 	minutes: [{ from: 1, to: 2 }, 3, 4],
 * 	month: ["SEP", "OCT"],
 * 	seconds: { every: 3, start: { from: 1, to: 2 } },
 * 	year: { every: 10, start: "?" },
 * }); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L ?/10",
 * parseCronQuartz({
 * 	dayOfMonth: undefined,
 * 	dayOfWeek: "*",
 * 	hours: "*",
 * 	minutes: "*",
 * 	month: "*",
 * 	seconds: "*",
 * 	year: "*",
 * }); // undefined,
 * ```
 * @param source `CronQuartz` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronQuartz = ({
	seconds,
	minutes,
	hours,
	dayOfMonth,
	month,
	dayOfWeek,
	year,
}: CronQuartz) => {
	const parts = [
		parseCronSeconds(seconds),
		parseCronMinutes(minutes),
		parseCronHours(hours),
		parseCronDayOfMonth(dayOfMonth),
		parseCronMonth(month),
		parseCronDayOfWeek(dayOfWeek),
		parseCronYear(year),
	];

	return parts.some(isUndefined) ? undefined : join(" ")(parts);
};
