import type { CronRange } from "./CronRange.js";
import type { CronSteps } from "./CronSteps.js";

/**
 * Cron list item.
 */
export type CronListItem<Value> = CronRange<Value> | CronSteps<Value> | Value;
