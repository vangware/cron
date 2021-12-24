import type { CronSecondsValue } from "../types/CronSecondsValue.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import { isCronSecondsValue } from "../validations/isCronSecondsValue.js";

/**
 * Parses `CronSecondsValue` into a string.
 *
 * @category Parser
 * @param source `CronSecondsValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSecondsValue: CronValueParser<
	CronSecondsValue
> = source => (isCronSecondsValue(source) ? `${source}` : undefined);
