import { isUndefined } from "@vangware/utils";
import { CronOptional } from "../types/CronOptional";
import { parseCronDayOfMonth } from "./parseCronDayOfMonth";
import { parseCronDayOfWeek } from "./parseCronDayOfWeek";
import { parseCronHours } from "./parseCronHours";
import { parseCronMinutes } from "./parseCronMinutes";
import { parseCronMonth } from "./parseCronMonth";
import { parseCronSeconds } from "./parseCronSeconds";
import { parseCronYear } from "./parseCronYear";

/**
 * Parses `Cron` into a string.
 * @param source `Cron` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCron = ({
	seconds = "*",
	minutes,
	hours,
	dayOfMonth,
	month,
	dayOfWeek,
	year = "*"
}: CronOptional) => {
	const parts = [
		parseCronSeconds(seconds),
		parseCronMinutes(minutes),
		parseCronHours(hours),
		parseCronDayOfMonth(dayOfMonth),
		parseCronMonth(month),
		parseCronDayOfWeek(dayOfWeek),
		parseCronYear(year)
	];

	return parts.some(isUndefined) ? undefined : parts.join(" ");
};
