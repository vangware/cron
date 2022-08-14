import { CRON_LAST } from "../constants.js";
import type { CronLastValue } from "../types/CronLastValue.js";
import { isCronLastValue } from "../validations/isCronLastValue.js";

/**
 * Parses `CronLastValue` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronLastValue({ last: 1 }); // "1L"
 * parseCronLastValue({ last: 99 }); // undefined
 * ```
 * @param source `CronLastValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronLastValue = (source: CronLastValue) =>
	isCronLastValue(source) ? `${source.last}${CRON_LAST}` : undefined;
