import { parseStringMonthValue } from "./parseStringMonthValue.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronMonth`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringMonth("10"); // 10
 * parseStringMonth("*"); // "*"
 * parseStringMonth("2/6"); // { every: 6, start: 2 }
 * parseStringMonth("?/6"); // { every: 6, start: "?" }
 * parseStringMonth("1,2,3,4"); // [1, 2, 3, 4]
 * parseStringMonth("1-5"); // { from: 1, to: 5 }
 * parseStringMonth("JAN-OCT"); // { from: "JAN", to: "OCT" }
 * parseStringMonth("jan-oct"); // { from: "JAN", to: "OCT" }
 * parseStringMonth("1,2,3,5-7"); // [1, 2, 3, { from: 5, to: 7 }]
 * parseStringMonth("INVALID"); // undefined
 * parseStringMonth("1,2,3,4,INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronMonth` or `undefined` if invalid.
 */
export const parseStringMonth = parseStringPart([0, 12])(parseStringMonthValue);
