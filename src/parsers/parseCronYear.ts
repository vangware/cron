import { parseCronPart } from "./parseCronPart.js";
import { parseCronYearValue } from "./parseCronYearValue.js";

/**
 * Parses `CronYear` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronYear(1989); // "1989"
 * parseCronYear("*"); // "*"
 * parseCronYear({ every: 10, start: 1989 }); // "1989/10"
 * parseCronYear({ every: 10, start: "?" }); // "?/10"
 * parseCronYear([1989, 1991, 2015, 2020]); // "1989,1991,2015,2020"
 * parseCronYear({ from: 1989, to: 2020 }); // "1989-2020"
 * parseCronYear([
 * 	1989,
 * 	1989,
 * 	1991,
 * 	2015,
 * 	2020,
 * 	{ from: 1989, to: 2020 },
 * ]); // "1989,1991,2015,2020,1989-2020"
 * ```
 * @param source `CronYear` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronYear = parseCronPart([0, 129])(parseCronYearValue);
