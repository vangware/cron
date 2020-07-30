import { CronLast } from "./CronLast";
import { CronPart } from "./CronPart";
import { CronStartOrBlank } from "./CronStartOrBlank";

/**
 * Cron part extended (used by `CronDayOfWeek` and `DayOfMonth`).
 */
export type CronPartExtended<Value> =
	| CronPart<Value>
	| CronStartOrBlank
	| CronLast;
