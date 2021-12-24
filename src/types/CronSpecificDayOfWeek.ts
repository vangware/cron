import type { CronDayOfWeekValueNumber } from "./CronDayOfWeekValueNumber.js";
import type { CronWeekValue } from "./CronWeekValue.js";

/**
 * Cron specific day of week ({day}#{week}).
 */
export type CronSpecificDayOfWeek = {
	readonly day: CronDayOfWeekValueNumber;
	readonly week: CronWeekValue;
};
