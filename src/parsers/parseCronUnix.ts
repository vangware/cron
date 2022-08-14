import { join } from "@vangware/iterables";
import { isUndefined } from "@vangware/predicates";
import type { CronUnix } from "../types/CronUnix.js";
import { parseCronDayOfMonth } from "./parseCronDayOfMonth.js";
import { parseCronDayOfWeek } from "./parseCronDayOfWeek.js";
import { parseCronHours } from "./parseCronHours.js";
import { parseCronMinutes } from "./parseCronMinutes.js";
import { parseCronMonth } from "./parseCronMonth.js";

/**
 * Parses `Cron` (UNIX) into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronUnix({
 * 	dayOfMonth: "*",
 * 	dayOfWeek: "*",
 * 	hours: "*",
 * 	minutes: "*",
 * 	month: "*",
 * }); // "* * * * *"
 * parseCronUnix({
 * 	dayOfMonth: [1, 2],
 * 	dayOfWeek: [1, 2],
 * 	hours: [1, 2],
 * 	minutes: [1, 2],
 * 	month: [1, 2],
 * }); // "1,2 1,2 1,2 1,2 1,2"
 * parseCronUnix({
 * 	dayOfMonth: { from: 1, to: 2 },
 * 	dayOfWeek: { from: 1, to: 2 },
 * 	hours: { from: 1, to: 2 },
 * 	minutes: { from: 1, to: 2 },
 * 	month: { from: 1, to: 2 },
 * }); // "1-2 1-2 1-2 1-2 1-2"
 * parseCronUnix({
 * 	dayOfMonth: { every: 2, start: 1 },
 * 	dayOfWeek: { every: 2, start: 1 },
 * 	hours: { every: 2, start: 1 },
 * 	minutes: { every: 2, start: 1 },
 * 	month: { every: 2, start: 1 },
 * }); // "1/2 1/2 1/2 1/2 1/2"
 * parseCronUnix({
 * 	dayOfMonth: { nearest: 2 },
 * 	dayOfWeek: { last: 1 },
 * 	hours: "*",
 * 	minutes: [{ from: 1, to: 2 }, 3, 4],
 * 	month: ["SEP", "OCT"],
 * }); // "1-2,3,4 * 2W SEP,OCT 1L"
 * parseCronUnix({
 * 	dayOfMonth: undefined,
 * 	dayOfWeek: "*",
 * 	hours: "*",
 * 	minutes: "*",
 * 	month: "*",
 * }); // undefined
 * ```
 * @param source `Cron` (UNIX) to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronUnix = ({
	minutes,
	hours,
	dayOfMonth,
	month,
	dayOfWeek,
}: CronUnix) => {
	const parts = [
		parseCronMinutes(minutes),
		parseCronHours(hours),
		parseCronDayOfMonth(dayOfMonth),
		parseCronMonth(month),
		parseCronDayOfWeek(dayOfWeek),
	];

	return parts.some(isUndefined) ? undefined : join(" ")(parts);
};
