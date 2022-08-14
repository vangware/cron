import { parseCronMonthValue } from "./parseCronMonthValue.js";
import { parseCronPart } from "./parseCronPart.js";

/**
 * Parses `CronMonth` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronMonth(10); // "10"
 * parseCronMonth("*"); // "*"
 * parseCronMonth({ every: 6, start: 2 }); // "2/6"
 * parseCronMonth([1, 2, 3, 4]); // "1,2,3,4"
 * parseCronMonth({ from: 1, to: 5 }); // "1-5"
 * parseCronMonth({ from: "JAN", to: "OCT" }); // "JAN-OCT"
 * parseCronMonth([1, 2, 3, { from: 5, to: 7 }]); // "1,2,3,5-7"
 * ```
 * @param source `CronMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMonth = parseCronPart([0, 12])(parseCronMonthValue);
