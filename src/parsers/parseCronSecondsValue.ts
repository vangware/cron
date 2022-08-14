import type { CronSecondsValue } from "../types/CronSecondsValue.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import { isCronSecondsValue } from "../validations/isCronSecondsValue.js";

/**
 * Parses `CronSecondsValue` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronSecondsValue(10); // "10"
 * parseCronSecondsValue(59); // "59"
 * parseCronSecondsValue(99); // undefined
 * ```
 * @param source `CronSecondsValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSecondsValue: CronValueParser<
	CronSecondsValue
> = source => (isCronSecondsValue(source) ? `${source}` : undefined);
