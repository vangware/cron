import type { CronEvery } from "./CronEvery";
import type { CronRange } from "./CronRange";

/**
 * Cron steps (start/every).
 */
export type CronSteps<Value> = {
	readonly every: number;
	readonly start: CronEvery | CronRange<Value> | Value;
};
