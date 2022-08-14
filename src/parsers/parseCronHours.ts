import { parseCronHoursValue } from "./parseCronHoursValue.js";
import { parseCronPart } from "./parseCronPart.js";

/**
 * Parses `CronHours` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronHours(10); // "10"
 * parseCronHours("*"); // "*"
 * parseCronHours({ every: 10, start: 2 }); // "2/10"
 * parseCronHours([1, 2, 3, 4]); // "1,2,3,4"
 * parseCronHours({ from: 5, to: 10 }); // "5-10"
 * parseCronHours([1, 2, 3, 4, { from: 5, to: 10 }]); // "1,2,3,4,5-10"
 * ```
 * @param source `CronHours` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronHours = parseCronPart([0, 24])(parseCronHoursValue);
