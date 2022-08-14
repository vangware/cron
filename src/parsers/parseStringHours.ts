import { parseStringHoursValue } from "./parseStringHoursValue.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronHours`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringHours("10"); // 10
 * parseStringHours("*"); // "*"
 * parseStringHours("2/10"); // { every: 10, start: 2 }
 * parseStringHours("?/10"); // { every: 10, start: "?" }
 * parseStringHours("1,2,3,4"); // [1, 2, 3, 4]
 * parseStringHours("5-10"); // { from: 5, to: 10 }
 * parseStringHours("1,2,3,4,5-10"); // [1, 2, 3, 4, { from: 5, to: 10 }]
 * parseStringHours("INVALID"); // undefined
 * parseStringHours("1,2,3,4,INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronHours` or `undefined` if invalid.
 */
export const parseStringHours = parseStringPart([0, 24])(parseStringHoursValue);
