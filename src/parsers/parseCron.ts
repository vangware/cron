import { CronOptional } from "../types/CronOptional";
import { parseCronDayOfMonth } from "./parseCronDayOfMonth";
import { parseCronDayOfWeek } from "./parseCronDayOfWeek";
import { parseCronHours } from "./parseCronHours";
import { parseCronMinutes } from "./parseCronMinutes";
import { parseCronMonth } from "./parseCronMonth";
import { parseCronSeconds } from "./parseCronSeconds";
import { parseCronYear } from "./parseCronYear";

/**
 * Takes a source string with a cron expression and returns CronParts.
 * @param source Source string to be parsed.
 */
export const parseCron = ({
	seconds = "*",
	minutes,
	hours,
	dayOfMonth,
	month,
	dayOfWeek,
	year = "*"
}: CronOptional): string =>
	[
		parseCronSeconds(seconds),
		parseCronMinutes(minutes),
		parseCronHours(hours),
		parseCronDayOfMonth(dayOfMonth),
		parseCronMonth(month),
		parseCronDayOfWeek(dayOfWeek),
		parseCronYear(year)
	].join(" ");
