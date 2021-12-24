import { isUndefined } from "@vangware/utils";
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
 * @category Parser
 * @param source string to be parsed.
 * @returns A `Cron` or `undefined` if invalid.
 */
export const parseStringQuartz = (source: string): CronQuartz | undefined => {
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
