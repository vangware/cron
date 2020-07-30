import { CronMonthValueNumber } from "./CronMonthValueNumber";
import { CronMonthValueString } from "./CronMonthValueString";

/**
 * Cron month value (1-12 and JAN-DEC).
 */
export type CronMonthValue = CronMonthValueNumber | CronMonthValueString;
