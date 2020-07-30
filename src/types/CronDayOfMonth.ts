import { CronDayOfMonthValue } from "./CronDayOfMonthValue";
import { CronNearestDayOfMonth } from "./CronNearestDayOfMonth";
import { CronPartExtended } from "./CronPartExtended";

/**
 * Cron day of month.
 */
export type CronDayOfMonth =
	| CronPartExtended<CronDayOfMonthValue>
	| CronNearestDayOfMonth;
