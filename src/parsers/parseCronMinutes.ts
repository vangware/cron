import { parseCronMinutesValue } from "./parseCronMinutesValue.js";
import { parseCronPart } from "./parseCronPart.js";

/**
 * Parses `CronMinutes` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronMinutes(10); // "10"
 * parseCronMinutes("*"); // "*"
 * parseCronMinutes({ every: 10, start: 2 }); // "2/10"
 * parseCronMinutes([1, 2, 3, 4]); // "1,2,3,4"
 * parseCronMinutes({ from: 5, to: 10 }); // "5-10"
 * parseCronMinutes([1, 2, 3, 4, { from: 5, to: 10 }]); // "1,2,3,4,5-10"
 * ```
 * @param source `CronMinutes` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMinutes = parseCronPart([0, 59])(parseCronMinutesValue);
