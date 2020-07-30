import { CronEvery } from "./CronEvery";
import { CronList } from "./CronList";
import { CronRange } from "./CronRange";
import { CronSteps } from "./CronSteps";

/**
 * Cron part.
 */
export type CronPart<Value> =
	| CronEvery
	| CronList<Value>
	| CronRange<Value>
	| CronSteps<Value>
	| Value;
