import type { CronEvery } from "./CronEvery.js";
import type { CronList } from "./CronList.js";
import type { CronRange } from "./CronRange.js";
import type { CronSteps } from "./CronSteps.js";

/**
 * Cron part.
 */
export type CronPart<Value> =
	| CronEvery
	| CronList<Value>
	| CronRange<Value>
	| CronSteps<Value>
	| Value;
