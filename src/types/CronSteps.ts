import { CronEvery } from "./CronEvery";
import { CronRange } from "./CronRange";

/**
 * Cron steps (start/every).
 */
export type CronSteps<Value> = {
	readonly every: number;
	readonly start: Value | CronEvery | CronRange<Value>;
};
