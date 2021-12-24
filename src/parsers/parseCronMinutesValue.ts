import type { CronMinutesValue } from "../types/CronMinutesValue.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import { isCronMinutesValue } from "../validations/isCronMinutesValue.js";

/**
 * Parses `CronMinutesValue` into a string.
 *
 * @category Parser
 * @param source `CronMinutesValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMinutesValue: CronValueParser<
	CronMinutesValue
> = source => (isCronMinutesValue(source) ? `${source}` : undefined);
