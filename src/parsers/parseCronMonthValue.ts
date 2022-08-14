import type { CronMonthValue } from "../types/CronMonthValue.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import { isCronMonthValue } from "../validations/isCronMonthValue.js";

/**
 * Parses `CronMonthValue` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronMonthValue(1); // "1"
 * parseCronMonthValue(12); // "12"
 * parseCronMonthValue(99); // undefined
 * ```
 * @param source `CronMonthValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMonthValue: CronValueParser<CronMonthValue> = source =>
	isCronMonthValue(source) ? `${source}` : undefined;
