import { isUndefined } from "@vangware/utils";
import {
	UNIX_DAY_OF_MONTH_POSITION,
	UNIX_DAY_OF_WEEK_POSITION,
	UNIX_HOURS_POSITION,
	UNIX_MINUTES_POSITION,
	UNIX_MONTH_POSITION,
} from "../constants";
import type { CronUnix } from "../types/CronUnix";
import { parseStringDayOfMonth } from "./parseStringDayOfMonth";
import { parseStringDayOfWeek } from "./parseStringDayOfWeek";
import { parseStringHours } from "./parseStringHours";
import { parseStringMinutes } from "./parseStringMinutes";
import { parseStringMonth } from "./parseStringMonth";
import { parseStringUnixExpression } from "./parseStringUnixExpression";

/**
 * Parses a string into a `CronUnix`.
 * @param source string to be parsed.
 * @returns A `CronUnix` or `undefined` if invalid.
 */
export const parseStringUnix = (source: string): CronUnix | undefined => {
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
