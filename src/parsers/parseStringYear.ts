import { parseStringPart } from "./parseStringPart.js";
import { parseStringYearValue } from "./parseStringYearValue.js";

/**
 * Parses a string into a `CronYear`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringYear("1989"); // 1989,
 * parseStringYear("*"); // "*",
 * parseStringYear("1989/10"); // { every: 10, start: 1989 },
 * parseStringYear("?/10"); // { every: 10, start: "?" },
 * parseStringYear("1989,1991,2015,2020"); // [1989, 1991, 2015, 2020],
 * parseStringYear("1989-2020"); // { from: 1989, to: 2020 },
 * parseStringYear("1989,1991,2015,2020,1989-2020"); // [1989, 1991, 2015, 2020, { from: 1989, to: 2020 }],
 * parseStringYear("INVALID"); // undefined,
 * parseStringYear("1,2,3,4,INVALID"); // undefined,
 * ```
 * @param source string to be parsed.
 * @returns A `CronYear` or `undefined` if invalid.
 */
export const parseStringYear = parseStringPart([0, 129])(parseStringYearValue);
