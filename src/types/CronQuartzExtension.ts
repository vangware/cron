import type { CronSeconds } from "./CronSeconds.js";
import type { CronYear } from "./CronYear.js";

/**
 * Cron expression parts coming with Quartz.
 */
export type CronQuartzExtension = {
	/**
	 * Cron `CronSeconds` object.
	 */
	readonly seconds: CronSeconds;
	/**
	 * Cron `CronYear` object.
	 */
	readonly year: CronYear;
};
