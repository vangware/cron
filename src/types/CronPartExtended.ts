import type { CronLast } from "./CronLast";
import type { CronPart } from "./CronPart";
import type { CronStartOrBlank } from "./CronStartOrBlank";

/**
 * Cron part extended (used by `CronDayOfWeek` and `DayOfMonth`).
 */
export type CronPartExtended<Value> =
	| CronLast
	| CronPart<Value>
	| CronStartOrBlank;
