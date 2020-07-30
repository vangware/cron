import { CronDayOfWeekValueNumber } from "./CronDayOfWeekValueNumber";
import { CronWeekValue } from "./CronWeekValue";

/**
 * Cron specific day of week ({day}#{week}).
 */
export type CronSpecificDayOfWeek = {
	readonly day: CronDayOfWeekValueNumber;
	readonly week: CronWeekValue;
};
