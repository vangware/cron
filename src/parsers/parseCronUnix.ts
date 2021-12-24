import { arrayJoin, isUndefined } from "@vangware/utils";
import type { CronUnix } from "../types/CronUnix.js";
import { parseCronDayOfMonth } from "./parseCronDayOfMonth.js";
import { parseCronDayOfWeek } from "./parseCronDayOfWeek.js";
import { parseCronHours } from "./parseCronHours.js";
import { parseCronMinutes } from "./parseCronMinutes.js";
import { parseCronMonth } from "./parseCronMonth.js";

/**
 * Parses `Cron` (UNIX) into a string.
 *
 * @category Parser
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

	return parts.some(isUndefined) ? undefined : arrayJoin(" ")(parts);
};
