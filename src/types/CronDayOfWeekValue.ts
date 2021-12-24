import type { CronDayOfWeekValueNumber } from "./CronDayOfWeekValueNumber.js";
import type { CronDayOfWeekValueString } from "./CronDayOfWeekValueString.js";

/**
 * Cron day of week value (0-7 | SUN-SAT).
 */
export type CronDayOfWeekValue =
	| CronDayOfWeekValueNumber
	| CronDayOfWeekValueString;
