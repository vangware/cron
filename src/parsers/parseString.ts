import { isUndefined } from "@vangware/utils";
import {
	CRON_DAY_OF_MONTH_POSITION,
	CRON_DAY_OF_WEEK_POSITION,
	CRON_HOURS_POSITION,
	CRON_MINUTES_POSITION,
	CRON_MONTH_POSITION,
	CRON_SECONDS_POSITION,
	CRON_YEAR_POSITION
} from "../constants";
import { Cron } from "../types/Cron";
import { parseStringDayOfMonth } from "./parseStringDayOfMonth";
import { parseStringDayOfWeek } from "./parseStringDayOfWeek";
import { parseStringHours } from "./parseStringHours";
import { parseStringMinutes } from "./parseStringMinutes";
import { parseStringMonth } from "./parseStringMonth";
import { parseStringSeconds } from "./parseStringSeconds";
import { parseStringYear } from "./parseStringYear";
import { splitExpression } from "./splitExpression";

/**
 * Takes a source string with a cron expression and returns CronParts.
 * @param source Source string to be parsed.
 */
export const parseString = (source: string): Cron | undefined => {
	const parts = splitExpression(source);
	const seconds = parts && parseStringSeconds(parts[CRON_SECONDS_POSITION]);
	const minutes = parts && parseStringMinutes(parts[CRON_MINUTES_POSITION]);
	const hours = parts && parseStringHours(parts[CRON_HOURS_POSITION]);
	const dayOfMonth =
		parts && parseStringDayOfMonth(parts[CRON_DAY_OF_MONTH_POSITION]);
	const month = parts && parseStringMonth(parts[CRON_MONTH_POSITION]);
	const dayOfWeek =
		parts && parseStringDayOfWeek(parts[CRON_DAY_OF_WEEK_POSITION]);
	const year = parts && parseStringYear(parts[CRON_YEAR_POSITION]);

	return [
		parts,
		seconds,
		minutes,
		hours,
		dayOfMonth,
		month,
		dayOfWeek,
		year
	].some(isUndefined)
		? undefined
		: ({
				dayOfMonth,
				dayOfWeek,
				hours,
				minutes,
				month,
				seconds,
				year
		  } as Cron);
};
