import type { CronDayOfMonthValue } from "./CronDayOfMonthValue.js";
import type { CronNearestDayOfMonth } from "./CronNearestDayOfMonth.js";
import type { CronPartExtended } from "./CronPartExtended.js";

/**
 * Cron day of month.
 */
export type CronDayOfMonth =
	| CronNearestDayOfMonth
	| CronPartExtended<CronDayOfMonthValue>;
