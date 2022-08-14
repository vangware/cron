import type { CronDayOfWeekValueNumber } from "./CronDayOfWeekValueNumber.js";
import type { CronWeekValue } from "./CronWeekValue.js";

/**
 * Cron specific day of week object. It gets turned into the string
 * `${day}#${week}`.
 */
export type CronSpecificDayOfWeek = {
	readonly day: CronDayOfWeekValueNumber;
	readonly week: CronWeekValue;
};
