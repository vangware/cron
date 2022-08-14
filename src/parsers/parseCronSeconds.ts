import { parseCronPart } from "./parseCronPart.js";
import { parseCronSecondsValue } from "./parseCronSecondsValue.js";

/**
 * Parses `CronSeconds` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronSeconds(10); // "10",
 * parseCronSeconds("*"); // "*",
 * parseCronSeconds({ every: 10, start: 2 }); // "2/10",
 * parseCronSeconds([1, 2, 3, 4]); // "1,2,3,4",
 * parseCronSeconds({ from: 5, to: 10 }); // "5-10",
 * parseCronSeconds([1, 2, 3, 4, { from: 5, to: 10 }]); // "1,2,3,4,5-10",
 * ```
 * @param source `CronSeconds` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSeconds = parseCronPart([0, 59])(parseCronSecondsValue);
