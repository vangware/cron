import { parseStringMinutesValue } from "./parseStringMinutesValue.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronMinutes`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringMinutes("10"); // 10
 * parseStringMinutes("*"); // "*"
 * parseStringMinutes("2/10"); // { every: 10, start: 2 }
 * parseStringMinutes("?/10"); // { every: 10, start: "?" }
 * parseStringMinutes("1,2,3,4"); // [1, 2, 3, 4]
 * parseStringMinutes("5-10"); // { from: 5, to: 10 }
 * parseStringMinutes("1,2,3,4,5-10"); // [1, 2, 3, 4, { from: 5, to: 10 }]
 * parseStringMinutes("INVALID"); // undefined
 * parseStringMinutes("1,2,3,4,INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronMinutes` or `undefined` if invalid.
 */
export const parseStringMinutes = parseStringPart([0, 59])(
	parseStringMinutesValue,
);
