import { isUndefined } from "@vangware/utils";
import {
	CRON_DAY_OF_MONTH_POSITION,
	CRON_DAY_OF_WEEK_POSITION,
	CRON_HOURS_POSITION,
	CRON_MINUTES_POSITION,
	CRON_MONTH_POSITION
} from "../constants";
import { CronUnix } from "../types/CronUnix";
import { parseStringDayOfMonth } from "./parseStringDayOfMonth";
import { parseStringDayOfWeek } from "./parseStringDayOfWeek";
import { parseStringHours } from "./parseStringHours";
import { parseStringMinutes } from "./parseStringMinutes";
import { parseStringMonth } from "./parseStringMonth";
import { splitExpression } from "./splitExpression";

/**
 * Parses a string into a `Cron` (UNIX).
 * @param source string to be parsed.
 * @returns A `Cron` (UNIX) or `undefined` if invalid.
 */
export const parseStringUnix = (source: string): CronUnix | undefined => {
	const parts = splitExpression(source);
	const minutes = parts && parseStringMinutes(parts[CRON_MINUTES_POSITION]);
	const hours = parts && parseStringHours(parts[CRON_HOURS_POSITION]);
	const dayOfMonth =
		parts && parseStringDayOfMonth(parts[CRON_DAY_OF_MONTH_POSITION]);
	const month = parts && parseStringMonth(parts[CRON_MONTH_POSITION]);
	const dayOfWeek =
		parts && parseStringDayOfWeek(parts[CRON_DAY_OF_WEEK_POSITION]);

	return [parts, minutes, hours, dayOfMonth, month, dayOfWeek].some(
		isUndefined
	)
		? undefined
		: ({
				dayOfMonth,
				dayOfWeek,
				hours,
				minutes,
				month
		  } as CronUnix);
};
