import type { CronMonthValueNumber } from "./CronMonthValueNumber.js";
import type { CronMonthValueString } from "./CronMonthValueString.js";

/**
 * Cron month value (1-12 and JAN-DEC).
 */
export type CronMonthValue = CronMonthValueNumber | CronMonthValueString;
