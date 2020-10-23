import type { CronEvery } from "./CronEvery";
import type { CronList } from "./CronList";
import type { CronRange } from "./CronRange";
import type { CronSteps } from "./CronSteps";

/**
 * Cron part.
 */
export type CronPart<Value> =
	| CronEvery
	| CronList<Value>
	| CronRange<Value>
	| CronSteps<Value>
	| Value;
