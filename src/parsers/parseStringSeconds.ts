import { parseStringPart } from "./parseStringPart.js";
import { parseStringSecondsValue } from "./parseStringSecondsValue.js";

/**
 * Parses a string into a `CronSeconds`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringSeconds("10"); // 10
 * parseStringSeconds("*"); // "*"
 * parseStringSeconds("2/10"); // { every: 10, start: 2 }
 * parseStringSeconds("?/10"); // { every: 10, start: "?" }
 * parseStringSeconds("1,2,3,4"); // [1, 2, 3, 4]
 * parseStringSeconds("5-10"); // { from: 5, to: 10 }
 * parseStringSeconds("1,2,3,4,5-10"); // [1, 2, 3, 4, { from: 5, to: 10 }]
 * parseStringSeconds("INVALID"); // undefined
 * parseStringSeconds("1,2,3,4,INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronSeconds` or `undefined` if invalid.
 */
export const parseStringSeconds = parseStringPart([0, 59])(
	parseStringSecondsValue,
);
