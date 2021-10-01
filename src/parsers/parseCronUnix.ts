import { arrayJoin, isUndefined } from "@vangware/utils";
import type { CronUnix } from "../types/CronUnix";
import { parseCronDayOfMonth } from "./parseCronDayOfMonth";
import { parseCronDayOfWeek } from "./parseCronDayOfWeek";
import { parseCronHours } from "./parseCronHours";
import { parseCronMinutes } from "./parseCronMinutes";
import { parseCronMonth } from "./parseCronMonth";

/**
 * Parses `Cron` (UNIX) into a string.
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
