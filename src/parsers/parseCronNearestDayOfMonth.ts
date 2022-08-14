import { CRON_NEAREST } from "../constants.js";
import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth.js";
import { isCronNearestDayOfMonth } from "../validations/isCronNearestDayOfMonth.js";

/**
 * Parses `CronNearestDayOfMonth` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronNearestDayOfMonth({ nearest: 2 }); // "2W"
 * parseCronNearestDayOfMonth({ nearest: 99 }); // undefined
 * ```
 * @param source `CronNearestDayOfMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronNearestDayOfMonth = (source: CronNearestDayOfMonth) =>
	isCronNearestDayOfMonth(source)
		? `${source.nearest}${CRON_NEAREST}`
		: undefined;
