import { arrayJoin, isUndefined } from "@vangware/utils";
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
 * @category Parser
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

	return parts.some(isUndefined) ? undefined : arrayJoin(" ")(parts);
};
