import type { CronDayOfMonth } from "./CronDayOfMonth";
import type { CronDayOfWeek } from "./CronDayOfWeek";
import type { CronHours } from "./CronHours";
import type { CronMinutes } from "./CronMinutes";
import type { CronMonth } from "./CronMonth";

/**
 * Cron expression (UNIX).
 */
export type CronUnix = {
	/**
	 * Cron `CronMinutes` object.
	 */
	readonly minutes: CronMinutes;
	/**
	 * Cron `CronHours` object.
	 */
	readonly hours: CronHours;
	/**
	 * Cron `CronDayOfMonth` object.
	 */
	readonly dayOfMonth: CronDayOfMonth;
	/**
	 * Cron `CronMonth` object.
	 */
	readonly month: CronMonth;
	/**
	 * Cron `CronDayOfWeek` object.
	 */
	readonly dayOfWeek: CronDayOfWeek;
};
