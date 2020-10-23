import type { CronDayOfWeekValueNumber } from "./CronDayOfWeekValueNumber";
import type { CronDayOfWeekValueString } from "./CronDayOfWeekValueString";

/**
 * Cron day of week value (0-7 | SUN-SAT).
 */
export type CronDayOfWeekValue =
	| CronDayOfWeekValueNumber
	| CronDayOfWeekValueString;
