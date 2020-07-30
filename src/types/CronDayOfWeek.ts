import { CronDayOfWeekValue } from "./CronDayOfWeekValue";
import { CronLastValue } from "./CronLastValue";
import { CronPartExtended } from "./CronPartExtended";
import { CronSpecificDayOfWeek } from "./CronSpecificDayOfWeek";

/**
 * Cron day of week.
 */
export type CronDayOfWeek =
	| CronPartExtended<CronDayOfWeekValue>
	| CronLastValue
	| CronSpecificDayOfWeek;
