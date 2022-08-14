import type { CronDayOfWeekValueNumber } from "./CronDayOfWeekValueNumber.js";

/**
 * Cron last object. It gets turned into the string `${last}L`.
 */
export type CronLastValue = {
	readonly last: CronDayOfWeekValueNumber;
};
