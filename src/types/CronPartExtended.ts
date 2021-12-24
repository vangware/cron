import type { CronLast } from "./CronLast.js";
import type { CronPart } from "./CronPart.js";
import type { CronStartOrBlank } from "./CronStartOrBlank.js";

/**
 * Cron part extended (used by `CronDayOfWeek` and `DayOfMonth`).
 */
export type CronPartExtended<Value> =
	| CronLast
	| CronPart<Value>
	| CronStartOrBlank;
