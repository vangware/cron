import type { CronDayOfMonthValue } from "./CronDayOfMonthValue";
import type { CronNearestDayOfMonth } from "./CronNearestDayOfMonth";
import type { CronPartExtended } from "./CronPartExtended";

/**
 * Cron day of month.
 */
export type CronDayOfMonth =
	| CronNearestDayOfMonth
	| CronPartExtended<CronDayOfMonthValue>;
