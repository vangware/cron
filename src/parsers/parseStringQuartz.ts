import { isUndefined } from "@vangware/predicates";
import type { Maybe } from "@vangware/types";
import {
	QUARTZ_DAY_OF_MONTH_POSITION,
	QUARTZ_DAY_OF_WEEK_POSITION,
	QUARTZ_HOURS_POSITION,
	QUARTZ_MINUTES_POSITION,
	QUARTZ_MONTH_POSITION,
	QUARTZ_SECONDS_POSITION,
	QUARTZ_YEAR_POSITION,
} from "../constants.js";
import type { CronQuartz } from "../types/CronQuartz.js";
import { parseStringDayOfMonth } from "./parseStringDayOfMonth.js";
import { parseStringDayOfWeek } from "./parseStringDayOfWeek.js";
import { parseStringHours } from "./parseStringHours.js";
import { parseStringMinutes } from "./parseStringMinutes.js";
import { parseStringMonth } from "./parseStringMonth.js";
import { parseStringQuartzExpression } from "./parseStringQuartzExpression.js";
import { parseStringSeconds } from "./parseStringSeconds.js";
import { parseStringYear } from "./parseStringYear.js";

/**
 * Parses a string into a `CronQuartz`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringQuartz("* * * * * * *");
 * // {
 * // 	dayOfMonth: "*",
 * // 	dayOfWeek: "*",
 * // 	hours: "*",
 * // 	minutes: "*",
 * // 	month: "*",
 * // 	seconds: "*",
 * // 	year: "*",
 * // }
 *
 * parseStringQuartz("* * * * *");
 * // {
 * // 	dayOfMonth: "*",
 * // 	dayOfWeek: "*",
 * // 	hours: "*",
 * // 	minutes: "*",
 * // 	month: "*",
 * // 	seconds: "*",
 * // 	year: "*",
 * // }
 *
 * parseStringQuartz("1,2 1,2 1,2 1,2 1,2 1,2 1989,2020");
 * // {
 * // 	dayOfMonth: [1, 2],
 * // 	dayOfWeek: [1, 2],
 * // 	hours: [1, 2],
 * // 	minutes: [1, 2],
 * // 	month: [1, 2],
 * // 	seconds: [1, 2],
 * // 	year: [1989, 2020],
 * // }
 *
 * parseStringQuartz("1-2 1-2 1-2 1-2 1-2 1-2 1989-2020");
 * // {
 * // 	dayOfMonth: { from: 1, to: 2 },
 * // 	dayOfWeek: { from: 1, to: 2 },
 * // 	hours: { from: 1, to: 2 },
 * // 	minutes: { from: 1, to: 2 },
 * // 	month: { from: 1, to: 2 },
 * // 	seconds: { from: 1, to: 2 },
 * // 	year: { from: 1989, to: 2020 },
 * // }
 *
 * parseStringQuartz("1/2 1/2 1/2 1/2 1/2 1/2 1989/10");
 * // {
 * // 	dayOfMonth: { every: 2, start: 1 },
 * // 	dayOfWeek: { every: 2, start: 1 },
 * // 	hours: { every: 2, start: 1 },
 * // 	minutes: { every: 2, start: 1 },
 * // 	month: { every: 2, start: 1 },
 * // 	seconds: { every: 2, start: 1 },
 * // 	year: { every: 10, start: 1989 },
 * // }
 *
 * parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L ?/10");
 * // {
 * // 	dayOfMonth: { nearest: 2 },
 * // 	dayOfWeek: { last: 1 },
 * // 	hours: "*",
 * // 	minutes: [{ from: 1, to: 2 }, 3, 4],
 * // 	month: ["SEP", "OCT"],
 * // 	seconds: { every: 3, start: { from: 1, to: 2 } },
 * // 	year: { every: 10, start: "?" },
 * // }
 *
 * parseStringQuartz("INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `Cron` or `undefined` if invalid.
 */
export const parseStringQuartz = (source: string): Maybe<CronQuartz> => {
	const parts = parseStringQuartzExpression(source);
	const seconds = parts && parseStringSeconds(parts[QUARTZ_SECONDS_POSITION]);
	const minutes = parts && parseStringMinutes(parts[QUARTZ_MINUTES_POSITION]);
	const hours = parts && parseStringHours(parts[QUARTZ_HOURS_POSITION]);
	const dayOfMonth =
		parts && parseStringDayOfMonth(parts[QUARTZ_DAY_OF_MONTH_POSITION]);
	const month = parts && parseStringMonth(parts[QUARTZ_MONTH_POSITION]);
	const dayOfWeek =
		parts && parseStringDayOfWeek(parts[QUARTZ_DAY_OF_WEEK_POSITION]);
	const year = parts && parseStringYear(parts[QUARTZ_YEAR_POSITION]);

	return [
		parts,
		seconds,
		minutes,
		hours,
		dayOfMonth,
		month,
		dayOfWeek,
		year,
	].some(isUndefined)
		? undefined
		: ({
				dayOfMonth,
				dayOfWeek,
				hours,
				minutes,
				month,
				seconds,
				year,
		  } as CronQuartz);
};
