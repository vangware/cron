import type { CronEvery } from "./CronEvery.js";
import type { CronRange } from "./CronRange.js";

/**
 * Cron steps (start/every).
 */
export type CronSteps<Value> = {
	readonly every: number;
	readonly start: CronEvery | CronRange<Value> | Value;
};
