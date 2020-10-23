import type { CronDayOfWeekValueNumber } from "./CronDayOfWeekValueNumber";
import type { CronWeekValue } from "./CronWeekValue";

/**
 * Cron specific day of week ({day}#{week}).
 */
export type CronSpecificDayOfWeek = {
	readonly day: CronDayOfWeekValueNumber;
	readonly week: CronWeekValue;
};
