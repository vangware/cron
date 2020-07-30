import { CronRange } from "./CronRange";
import { CronSteps } from "./CronSteps";

/**
 * Cron list item.
 */
export type CronListItem<Value> = Value | CronRange<Value> | CronSteps<Value>;
