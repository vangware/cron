import { arrayJoin, isUndefined } from "@vangware/utils";
import type { CronQuartz } from "../types/CronQuartz";
import { parseCronDayOfMonth } from "./parseCronDayOfMonth";
import { parseCronDayOfWeek } from "./parseCronDayOfWeek";
import { parseCronHours } from "./parseCronHours";
import { parseCronMinutes } from "./parseCronMinutes";
import { parseCronMonth } from "./parseCronMonth";
import { parseCronSeconds } from "./parseCronSeconds";
import { parseCronYear } from "./parseCronYear";

/**
 * Parses `CronQuartz` into a string.
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
	year
}: CronQuartz) => {
	const parts = [
		parseCronSeconds(seconds),
		parseCronMinutes(minutes),
		parseCronHours(hours),
		parseCronDayOfMonth(dayOfMonth),
		parseCronMonth(month),
		parseCronDayOfWeek(dayOfWeek),
		parseCronYear(year)
	];

	return parts.some(isUndefined) ? undefined : arrayJoin(" ")(parts);
};
