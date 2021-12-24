import type { CronDayOfWeekValue } from "./CronDayOfWeekValue.js";
import type { CronLastValue } from "./CronLastValue.js";
import type { CronPartExtended } from "./CronPartExtended.js";
import type { CronSpecificDayOfWeek } from "./CronSpecificDayOfWeek.js";

/**
 * Cron day of week.
 */
export type CronDayOfWeek =
	| CronLastValue
	| CronPartExtended<CronDayOfWeekValue>
	| CronSpecificDayOfWeek;
