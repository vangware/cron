import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import { isCronDayOfWeekValue } from "../validations/isCronDayOfWeekValue.js";

/**
 * Parses `CronDayOfWeekValue` into a string.
 *
 * @category Parser
 * @param source `CronDayOfWeekValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfWeekValue: CronValueParser<
	CronDayOfWeekValue
> = source => (isCronDayOfWeekValue(source) ? `${source}` : undefined);
