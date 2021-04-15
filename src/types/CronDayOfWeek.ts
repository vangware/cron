import type { CronDayOfWeekValue } from "./CronDayOfWeekValue";
import type { CronLastValue } from "./CronLastValue";
import type { CronPartExtended } from "./CronPartExtended";
import type { CronSpecificDayOfWeek } from "./CronSpecificDayOfWeek";

/**
 * Cron day of week.
 */
export type CronDayOfWeek =
	| CronLastValue
	| CronPartExtended<CronDayOfWeekValue>
	| CronSpecificDayOfWeek;
