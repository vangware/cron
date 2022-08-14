import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import { isCronSpecificDayOfWeek } from "../validations/isCronSpecificDayOfWeek.js";

/**
 * Parses `CronSpecificDayOfWeek` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronSpecificDayOfWeek({ day: 1, week: 5 }); // "1#5"
 * parseCronSpecificDayOfWeek({ day: 99, week: 99 }); // undefined
 * ```
 * @param source `CronSpecificDayOfWeek` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSpecificDayOfWeek = (
	source: CronSpecificDayOfWeek | string,
) =>
	isCronSpecificDayOfWeek(source)
		? `${source.day}#${source.week}`
		: undefined;
