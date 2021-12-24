import type { CronDayOfMonth } from "./CronDayOfMonth.js";
import type { CronDayOfWeek } from "./CronDayOfWeek.js";
import type { CronHours } from "./CronHours.js";
import type { CronMinutes } from "./CronMinutes.js";
import type { CronMonth } from "./CronMonth.js";

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
