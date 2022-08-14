import { isUndefined } from "@vangware/predicates";
import type { Maybe } from "@vangware/types";
import {
	UNIX_DAY_OF_MONTH_POSITION,
	UNIX_DAY_OF_WEEK_POSITION,
	UNIX_HOURS_POSITION,
	UNIX_MINUTES_POSITION,
	UNIX_MONTH_POSITION,
} from "../constants.js";
import type { CronUnix } from "../types/CronUnix.js";
import { parseStringDayOfMonth } from "./parseStringDayOfMonth.js";
import { parseStringDayOfWeek } from "./parseStringDayOfWeek.js";
import { parseStringHours } from "./parseStringHours.js";
import { parseStringMinutes } from "./parseStringMinutes.js";
import { parseStringMonth } from "./parseStringMonth.js";
import { parseStringUnixExpression } from "./parseStringUnixExpression.js";

/**
 * Parses a string into a `CronUnix`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringUnix("* * * * *");
 * // {
 * // 	dayOfMonth: "*",
 * // 	dayOfWeek: "*",
 * // 	hours: "*",
 * // 	minutes: "*",
 * // 	month: "*",
 * // }
 *
 * parseStringUnix("* * * * *");
 * // {
 * // 	dayOfMonth: "*",
 * // 	dayOfWeek: "*",
 * // 	hours: "*",
 * // 	minutes: "*",
 * // 	month: "*",
 * // }
 *
 * parseStringUnix("1,2 1,2 1,2 1,2 1,2");
 * // {
 * // 	dayOfMonth: [1, 2],
 * // 	dayOfWeek: [1, 2],
 * // 	hours: [1, 2],
 * // 	minutes: [1, 2],
 * // 	month: [1, 2],
 * // }
 *
 * parseStringUnix("1-2 1-2 1-2 1-2 1-2");
 * // {
 * // 	dayOfMonth: { from: 1, to: 2 },
 * // 	dayOfWeek: { from: 1, to: 2 },
 * // 	hours: { from: 1, to: 2 },
 * // 	minutes: { from: 1, to: 2 },
 * // 	month: { from: 1, to: 2 },
 * // }
 *
 * parseStringUnix("1/2 1/2 1/2 1/2 1/2");
 * // {
 * // 	dayOfMonth: { every: 2, start: 1 },
 * // 	dayOfWeek: { every: 2, start: 1 },
 * // 	hours: { every: 2, start: 1 },
 * // 	minutes: { every: 2, start: 1 },
 * // 	month: { every: 2, start: 1 },
 * // }
 *
 * parseStringUnix("1-2,3,4 * 2W SEP,OCT 1L");
 * // {
 * // 	dayOfMonth: { nearest: 2 },
 * // 	dayOfWeek: { last: 1 },
 * // 	hours: "*",
 * // 	minutes: [{ from: 1, to: 2 }, 3, 4],
 * // 	month: ["SEP", "OCT"],
 * // }
 *
 * parseStringUnix("INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronUnix` or `undefined` if invalid.
 */
export const parseStringUnix = (source: string): Maybe<CronUnix> => {
	const parts = parseStringUnixExpression(source);
	const minutes = parts && parseStringMinutes(parts[UNIX_MINUTES_POSITION]);
	const hours = parts && parseStringHours(parts[UNIX_HOURS_POSITION]);
	const dayOfMonth =
		parts && parseStringDayOfMonth(parts[UNIX_DAY_OF_MONTH_POSITION]);
	const month = parts && parseStringMonth(parts[UNIX_MONTH_POSITION]);
	const dayOfWeek =
		parts && parseStringDayOfWeek(parts[UNIX_DAY_OF_WEEK_POSITION]);

	return [parts, minutes, hours, dayOfMonth, month, dayOfWeek].some(
		isUndefined,
	)
		? undefined
		: ({
				dayOfMonth,
				dayOfWeek,
				hours,
				minutes,
				month,
		  } as CronUnix);
};
