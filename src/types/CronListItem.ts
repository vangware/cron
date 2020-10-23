import type { CronRange } from "./CronRange";
import type { CronSteps } from "./CronSteps";

/**
 * Cron list item.
 */
export type CronListItem<Value> = Value | CronRange<Value> | CronSteps<Value>;
