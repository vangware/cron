import type { CronSeconds } from "./CronSeconds";
import type { CronYear } from "./CronYear";

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
