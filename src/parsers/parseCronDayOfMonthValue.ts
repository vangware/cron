import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import { isCronDayOfMonthValue } from "../validations/isCronDayOfMonthValue.js";

/**
 * Parses `CronDayOfMonthValue` into a string.
 *
 * @category Parser
 * @param source `CronDayOfMonthValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfMonthValue: CronValueParser<
	CronDayOfMonthValue
> = source => (isCronDayOfMonthValue(source) ? `${source}` : undefined);
