import type { CronValueParser } from "../types/CronValueParser.js";
import type { CronYearValue } from "../types/CronYearValue.js";
import { isCronYearValue } from "../validations/isCronYearValue.js";

/**
 * Parses `CronYearValue` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronYearValue(1989); // "1989"
 * parseCronYearValue(2022); // "2022"
 * parseCronYearValue(1969); // undefined
 * parseCronYearValue(3000); // undefined
 * ```
 * @param source `CronYearValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronYearValue: CronValueParser<CronYearValue> = source =>
	isCronYearValue(source) ? `${source}` : undefined;
